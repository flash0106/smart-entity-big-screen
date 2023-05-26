// 基础的柱状图配置文件

export const barOptions = {
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
        top: '50',
        containLabel: true
    },
    axisPointer: {
        type: 'shadow',
        // lineStyle: {
        //     color: '#7B4CF4'
        // }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLabel: {
            margin: 12,
            color: '#979DA3',
            fontSize: 14,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#C0CCD7',
            }
        },
        axisTick: {
            show: false,
        },
        axisPointer: {
            snap: true,
            type: 'shadow'
        },
        data: ['北京大学', '天津大学']
    },
    yAxis: {
        type: 'value',
        min: 1,
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
            color: '#979DA3',
            fontSize: 13,
        }
    },
    series: [
    ]
}

export const seriesItem = {
    name: '',
    type: 'bar',
    barWidth: '32px',
    label: {
        show: true,
        distance: 12,
        position: 'top',
        fontSize: 15,
        color: '#7B4CF4'
    },
    itemStyle: {
        borderRadius: [4, 4, 0, 0]
    },
    data: [10, 52, 200, 334, 390, 330, 220]
}

export const realtimeBarOptions = {
    color: ['#4F6EF8', ' #1B9CFF', ' #FF8F0F', '#FFBD02', '#F9D436', '#FE5F43', '#14C3F7', '#2F4EBE'],
    grid: {
        left: '20',
        right: '40',
        top: '20',
        bottom: '20',
        containLabel: true
    },
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 5, // only the largest 6 bars will be displayed
        axisLabel: {
            color: '#fff',
            fontSize: '16'
        }
    },
    series: [
        {
            realtimeSort: true,
            name: '',
            colorBy: 'data',
            type: 'bar',
            data: [],
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        },

    ],
    animationDuration: 8000,
    animationDurationUpdate: 8000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
}