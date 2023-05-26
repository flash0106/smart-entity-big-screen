export default {
  getSatisfactionData(data) {
    let res = [];
    if (data.year == '2022') {
      res = [
        {
          name: "本校",
          value: [96.01, 95.42, 95.20, 94.70, 97.08, 96.39]
        },
        {
          name: "全省平均",
          value: [92.20, 91.70, 92.02, 90.47, 85.95, 92.05]
        }
      ]
    }
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  },
  getKeyUnitData(data) {
    let res = [];
    if (data.year == '2022') {
      res = [
        { name: "华为", value: 194 },
        { name: "海康威视", value: 131 },
        { name: "字节跳动", value: 84 },
        { name: "中国移动", value: 78 },
        { name: "大华", value: 60 },
        {
          name: "网易", value: 49
        }
      ]
    } else if (data.year == '2021') {
      res = [
        { name: "海康威视", value: 97 },
        { name: "华为", value: 88 },
        { name: "大华", value: 86 },
        { name: "易企银", value: 79 },
        { name: "恒生电子", value: 71 },
        {
          name: "巨量引擎", value: 51
        }
      ]
    } else if (data.year == '2019') {
      res = [
        { name: "华为", value: 211 },
        { name: "中电海康", value: 158 },
        { name: "中国移动", value: 61 },
        { name: "宁波银行", value: 51 },
        { name: "新华三", value: 50 },
        { name: "中国工商", value: 49 },
      ]
    }
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  },
  getSalaryRankData(data) {
    let res = [];
    if (data.year == '2021') {
      res = [
        { name: "经济统计学", value: 9500 },
        { name: "信息安全", value: 9500 },
        { name: "数学与应用数学", value: 9500 },
        { name: "软件工程", value: 9500 },
        { name: "通信工程", value: 9000 },
        {
          name: "电子科学与技术", value: 8961
        },
        {
          name: "本校平均", value: 8099
        },
        {
          name: "全国平均", value: 6150
        }
      ]
    } else if (data.year == '2020') {
      res = [
        { name: "生物医学工程", value: 9500 },
        { name: "信息工程", value: 9500 },
        { name: "信息安全", value: 8932 },
        { name: "保密管理", value: 8500 },
        { name: "软件工程", value: 8372 },
        {
          name: "市场营销", value: 8333
        },
        {
          name: "本校平均", value: 7178
        },
        {
          name: "全国平均", value: 5887
        }
      ]
    }
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  }
}