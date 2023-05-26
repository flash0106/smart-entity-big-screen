// 基础的雷达图配置文件

export const radarOptions = {
    color: ['#ec5a7b', '#3478f5'],
    legend: {
        data: [],
        top: 20,
        right: 20,
        textStyle: {
            fontSize: 14,
            color: "rgba(255,255,255,1)"
        },
        orient: "vertical"
    },
    tooltip: {
        show: true
    },
    radar: {
        indicator: [],
        axisName: {
            color: '#fff',
            fontSize: '18',
            borderRadius: 3,
            padding: [3, 5],
            formatter: (value) => {
                return '「' + value + '」'
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: [
                    'rgba(0,206,209, 0.1)',
                    'rgba(0,206,209, 0.2)',
                    'rgba(0,206,209, 0.3)',
                    'rgba(0,206,209, 0.4)',
                    'rgba(0,206,209, 0.5)',
                    'rgba(0,206,209, 0.6)'
                ].reverse()
            }
        },
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(0,255,255, 0.1)',
                    'rgba(0,255,255, 0.2)',
                    'rgba(0,255,255, 0.3)',
                    'rgba(0,255,255, 0.4)',
                    'rgba(0,255,255, 0.5)',
                    'rgba(0,255,255, 0.6)'
                ].reverse(),
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 30,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    series: [
        {
            type: 'radar',
            // areaStyle: {
            //     color: 'rgba(255,237,145, 0.5)'
            // },
            // itemStyle: {
            //     color: 'rgba(255,237,145,0.8)',
            //     borderColor: 'rgba(255,237,145,0.2)',
            //     borderWidth: 10
            // },
            // lineStyle: {
            //     color: 'rgba(255,237,145, 0.6)',
            //     width: 2
            // },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 14
                },
            },
            data: [
                {
                    value: []
                }
            ]
        }
    ],
}