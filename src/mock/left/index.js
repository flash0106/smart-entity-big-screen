export default {
  getEmploymentRateData(data) {
    let res = [];
    if (data.type == 'undergraduate') {
      res = [
        { name: "签就业协议形式就业", value: 31.08 },
        { name: "升学", value: 33.09 },
        { name: "自由职业", value: 15.42 },
        { name: "签劳动合同形式就业", value: 10.74 },
        { name: "出国、出境", value: 3.54 },
        { name: "其他录用形式就业", value: 1.29 },
        { name: "地方基层项目", value: 0.64 },
        { name: "自主创业", value: 0.22 },
        { name: "国家基层项目", value: 0.20 },
        { name: "应征义务兵", value: 0.12 },
        { name: "科研助理", value: 0.05 },
        { name: "未就业", value: 3.61 }
      ]
    }
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  },
  getTrendAnalysisData(data) {
    let res = {
      '2019': [
        { name: "签就业协议形式就业", value: 55.81 },
        { name: "升学", value: 17.60 },
        { name: "自由职业", value: 0 },
        { name: "签劳动合同形式就业", value: 16.17 },
        { name: "出国、出境", value: 4.67 },
        { name: "其他录用形式就业", value: 0.87 },
        { name: "基层项目", value: 0.90 },
        { name: "自主创业", value: 0.21 },
        { name: "应征义务兵", value: 0 },
        { name: "科研助理", value: 0 },
      ],
      '2021': [
        { name: "签就业协议形式就业", value: 35.91 },
        { name: "升学", value: 29.72 },
        { name: "自由职业", value: 7.46 },
        { name: "签劳动合同形式就业", value: 14.74 },
        { name: "出国、出境", value: 3.36 },
        { name: "其他录用形式就业", value: 2.24 },
        { name: "基层项目", value: 0.89 },
        { name: "自主创业", value: 0.46 },
        { name: "应征义务兵", value: 0.25 },
        { name: "科研助理", value: 0 },
      ],
      '2022': [
        { name: "签就业协议形式就业", value: 31.08 },
        { name: "升学", value: 33.09 },
        { name: "自由职业", value: 15.42 },
        { name: "签劳动合同形式就业", value: 10.74 },
        { name: "出国、出境", value: 3.54 },
        { name: "其他录用形式就业", value: 1.29 },
        { name: "基层项目", value: 0.84 },
        { name: "自主创业", value: 0.22 },
        { name: "应征义务兵", value: 0.12 },
        { name: "科研助理", value: 0.05 },
      ]
    }
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  },
  getYearOnYearAnalysisData(data) {
    let res = [
      {
        name: "同比进步学院",
        value: 10
      },
      {
        name: "同比持平学院",
        value: 1
      },
      {
        name: "同比退步学院",
        value: 3
      },
    ]
    return new Promise((resolve, reject) => {
      // return res;
      resolve(res);
    })
  }
}