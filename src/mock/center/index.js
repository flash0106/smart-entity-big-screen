export default {
  getProvinceRate(data) {
    let res = {};
    if (data.year == '2022') {
      if (data.stu_type == 'undergraduate') {
        res = {
          province_inside: 0.7233,
          province_outside: 0.2767
        }
      } else if (data.stu_type == 'join_undergraduate') {
        res = {
          province_inside: 0.9288,
          province_outside: 0.0712
        }
      } else if (data.stu_type == 'master') {
        res = {
          province_inside: 0.6874,
          province_outside: 0.3126
        }
      } else if (data.stu_type == 'doctor') {
        res = {
          province_inside: 0.6364,
          province_outside: 0.3636
        }
      }
    }
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  },
  getCityData(data) {
    let res = [
      { city: "杭州市", value: 75.89, num: 976 },
      { city: "宁波市", value: 8.71, num: 112 },
      { city: "金华市", value: 2.33, num: 30 },
      { city: "台州市", value: 2.80, num: 36 },
      { city: "绍兴市", value: 1.87, num: 24 },
      { city: "嘉兴市", value: 2.18, num: 28 },
      { city: "温州市", value: 2.95, num: 38 },
      { city: "湖州市", value: 1.71, num: 22 },
      { city: "丽水市", value: 0.93, num: 12 },
      { city: "衢州市", value: 0.39, num: 5 },
      { city: "舟山市", value: 0.23, num: 3 },
    ];
    return new Promise((resolve, reject) => {
      resolve(res.filter((item) => item.city == data.city)[0]);
    })
  }
}