import { CountUp } from "countup.js";
/**
 * 数字加载动画
 * @param {String} elId 元素id
 * @param {Number|String} startVal 开始数值
 * @param {Number|String} endVal 结束数值
 * @param {Number} decimalNum 小数点
 * @param {Number} duration 动效时间
 */
export const rollNum = (
  elId,
  startVal,
  endVal,
  decimalNum = 0,
  duration = 3
) => {
  let countUp = new CountUp(elId, endVal, {
    startVal: startVal,
    decimalPlaces: decimalNum,
    duration: duration,
    useEasing: true, // 使用缓和
    useGrouping: true, // 使用分组(是否显示千位分隔符,一般为 true)
    separator: ",", // 分隔器(千位分隔符,默认为',')
    decimal: ".", // 十进制(小数点符号,默认为 '.')
    prefix: "", // 字首(数字的前缀,根据需要可设为 $,¥,￥ 等)
    suffix: "", // 后缀(数字的后缀 ,根据需要可设为 元,个,美元 等)
  });
  if (!countUp.error) {
    countUp.start();
  } else {
    console.log(countUp.error);
  }
};

export function copyObj(obj) {
  var str, newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else if (window.JSON) {
    str = JSON.stringify(obj);//系列化对象
    newobj = JSON.parse(str); //还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object' ?
        copyObj(obj[i]) : obj[i];
    }
  }
  return newobj;
}

// element 是全屏的容器， 进入全屏
export function fullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// 退出全屏
export function exitFullscreen() {
  if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen();
  }
}

// 判断是否再全屏
export function isFullScreen() {
  return !!(
    document.fullscreen
    || document.mozFullScreen
    || document.webkitIsFullScreen
    || document.webkitFullScreen
    || document.msFullScreen
  );
}
