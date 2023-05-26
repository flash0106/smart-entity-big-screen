// 基础的饼图配置文件

export const pieOptions = {
  color: ['#4F6EF8', ' #1B9CFF', ' #FF8F0F', '#FFBD02', '#F9D436', '#FE5F43', '#14C3F7', '#2F4EBE'],
  tooltip: {
    show: true,
    trigger: 'item',
    formatter: "{b} ——{c}%"
  },
  grid: {
    top: '20%',
    left: '15px',
    right: '15px',
    bottom: '25px',
    containLabel: true
  },
  legend: {
    orient: 'vertical',
    // x: 'left',
    // y: 'center',
    data: [],
    top: 15,
    left: 10,
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 10,
    textStyle: {
      color: '#141617',
      fontSize: 14,
    }
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['25%', '75%'],
      label: {
        alignTo: 'edge',
        formatter: '{name|{b}}\n{rate|{c}%}',
        minMargin: 10,
        edgeDistance: 10,
        lineHeight: 18,
        rich: {
          name: {
            fontSize: 16,
            color: '#fff',
            fontWeight: '600'
          },
          rate: {
            fontSize: 14,
            color: "#ec5a7b"
          }
        }
      },
      labelLine: {
        show: true,
        minTurnAngle: 110
      },
      data: [{ value: 20, name: '面上项目' },
      { value: 10, name: '青年科学基金项目' },
      { value: 10, name: '重点项目' },
      { value: 10, name: '重大项目' },
      { value: 10, name: '杰出青年科学基金' },
      { value: 20, name: '优秀青年科学基金' },
      { value: 10, name: '创新研究群体项目' },
      { value: 10, name: '其他项目' }],
    },
  ]
};

export const specialPieOptions = {
  color: ['#4F6EF8', ' #1B9CFF', ' #FF8F0F', '#FFBD02', '#F9D436', '#FE5F43', '#14C3F7', '#2F4EBE'],
  grid: {
    top: '20%',
    left: '15px',
    right: '15px',
    bottom: '25px',
    containLabel: true
  },
  series: [
    {
      type: "pie",
      center: ['50%', '50%'],
      radius: ['50%', '90%'],
      data: [],
      label: {
        show: false,
        position: 'center',
        formatter: '{num|{c}}\n{name|{b}}',
        rich: {
          num: {
            fontSize: 48,
            fontFamily: 'ding',
            fontWeight: '600',
            color: 'color'
          },
          name: {
            fontSize: 16,
            fontWeight: '500',
            color: '#fff'
          }
        }
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },

    }
  ]
}