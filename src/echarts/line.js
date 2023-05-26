// 基础的折线图配置文件

export const lineOptions = {
  color: ['#7B4CF4'],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: []
  },
  grid: {
    left: '0',
    right: '20',
    bottom: '38px',
    top: '10',
    containLabel: true
  },
  axisPointer: {
    lineStyle: {
      color: '#7B4CF4'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    axisLabel: {
      margin: 12,
      color: '#979DA3',
      fontSize: 14,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#C0CCD7',
      }
    },
    axisPointer: {
      snap: true,
    },
    data: []
  },
  yAxis: {
    type: 'value',
    inverse: false,
    axisLine: {
      show: false,
      lineStyle: {
        color: '#C0CCD7'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        color: "#DDE2EB",
        dashOffset: 10
      },
    },
    axisLabel: {
      margin: 8,
      // formatter: `No.{value}`,
      color: '#979DA3',
      fontSize: 13,
    }
  },
  series: [
    {
      name: '',
      type: 'line',
      symbol: 'circle',
      showSymbol: false,
      symbolSize: 8,
      lineStyle: {
        width: 3,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(123, 76, 244, 0.20)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(123, 76, 244, 0)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        origin: 'end'
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2,
        shadowColor: 'rgba(72, 80, 119, 0.22)',
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1
      },
      data: []
    }
  ]
}

export const stackLineOptions = {
  color: ['#4F6EF8', ' #1B9CFF', ' #FF8F0F', '#FFBD02', '#F9D436', '#FE5F43', '#14C3F7', '#2F4EBE'],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: true,
    type: 'scroll',
    orient: 'vertical',
    right: 0,
    top: 10,
    width: "30%",
    padding: [5, 0, 0, 0],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '0',
    right: '30%',
    bottom: '20',
    top: '20',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      margin: 8,
      color: '#fff',
      fontSize: 14,
    },
    data: ['2019', '2021', '2022'],

  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        color: "#DDE2EB",
        dashOffset: 10
      },
    },
    axisLabel: {
      margin: 8,
      color: '#fff',
      formatter: `{value}%`,
      fontSize: 13,
    }
  },
  series: [

  ]
}