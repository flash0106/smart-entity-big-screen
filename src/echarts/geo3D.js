// 基础的3d地图配置项
export const geo3DOptions = {
  series: [{
    type: 'map3D',
    map: "zhejiang",
    roam: true,
    itemStyle: {
      color: "#4F6EF8",
      //opacity: 0.8,
      borderWidth: 0.8,
      borderColor: "#000"
    },
    viewControl: {
      autoRotate: false,
      autoRotateAfterStill: 3,
      rotateSensitivity: [0, 1],
      distance: 120,
      minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
      maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
      minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
      maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
      animation: true, // 是否开启动画。[ default: true ]
      animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
      animationEasingUpdate: "cubicInOut" // 过渡动画的缓动效果。[ default: cubicInOut ]
    },

    emphasis: {
      label: {
        //移入时的高亮文本
        show: true,
        color: "#fff", //显示字体颜色变淡
        fontSize: 18 //显示字体变大
      },
      itemStyle: {
        color: "#ec5a7b" //显示移入的区块变粉色
      }
    },
    select: {
      label: {
        //移入时的高亮文本
        show: true,
        color: "#fff", //显示字体颜色变淡
        fontSize: 18 //显示字体变大
      },
      itemStyle: {
        color: "#ec5a7b" //显示移入的区块变粉色
      }
    },
    label: {
      show: true,
      position: "top",
      color: "#fff", //地图初始化区域字体颜色
      fontSize: 14,
      lineHeight: 16
      // textStyle: {
      //   color: "#fff", //地图初始化区域字体颜色
      //   fontSize: 12,
      //   opacity: 1,
      //   backgroundColor: "rgba(0,23,11,0)",
      // },
    },
    shading: "lambert",
    light: {
      //光照阴影
      main: {
        // color: "#fff", //光照颜色
        intensity: 0.5, //光照强度
        //shadowQuality: 'high', //阴影亮度
        shadow: true, //是否显示阴影
        shadowQuality: "high", //阴影质量 ultra //阴影亮度
        alpha: 55,
        beta: 10
      },
      ambient: {
        intensity: 0.7
      }
    }
  }],
}