import axios from 'axios'
import router from '../router';
import element from "../utils/element";
var instance = axios.create({
  // 参数序列化
  withCredentials: true,
  // baseURL: "http://192.168.2.29:12100"
});

function serialize(data = {}) {
  let dataStr = []
  Object.keys(data).forEach(k => {
    let value = data[k]
    if (value !== null && value !== undefined) {
      dataStr.push(`${k}=${encodeURI(value)}`)
    }
  })
  return dataStr.join('&')
}

function handleError(e) {
  if (e.alreadyTip) {
    throw e
  }
  const { response, request } = e;
  const status = (response || {}).status;
  const responseURL = (request || {}).responseURL;
  switch (status) {
    case 404:
      element.$open(`接口404:${responseURL}`, 'warning', 2000);
      break;
    case 500:
    case 520:
      element.$open(`接口错误${status}`, 'warning', 2000);
      break;
    default:
      //element.$open('系统错误', 'warning', 2000);
      break;
  }
  throw e
}
function proessData(response, e) {
  console.log(response);
  let result = response.data
  const state = String(result.state);
  switch (state) {
    case '0':
      return result.data;
    case '1':
      element.$open(result.data, 'warning', 3000);
      throw {
        alreadyTip: true,
        message: result.data
      };
    case '2':
      //用户未登录
      element.$open('用户未登录', 'warning', 3000);
      localStorage.setItem("userSource", {});
      router.push({
        path: '/login'
      })
      throw new Error('用户未登录');
    default:
      throw new Error(`未定义状态码：${state}`);
  }
}
function proessData1(response, e) {
  let result = response.data
  if (result && result.state == '2') {
    router.push('/login')
  }
  else { }
  return result
}
function get(path, data) {
  let url = path;
  if (typeof data === "string") {
    return instance.get(url + data).then(proessData)
  } else {
    return instance.get(url + '?' + serialize(data)).then(proessData)
  }
}
function get1(path, data) {
  let url = path;
  return instance.get(url + '?' + serialize(data)).then(proessData1)
}
function post(path, data) {
  let url = path;
  return instance.post(url, data).then(proessData).catch(handleError)
}
function post1(path, data) {
  let url = path;
  return instance.post(url, data).then(proessData1).catch(handleError)
}

export default { get, get1, post, post1 }