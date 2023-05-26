import {
  ref, onMounted, onBeforeUnmount
} from "vue";

export function useScale() {
  //指向最外层容器
  const appRef = ref();
  //定时函数
  const timer = ref(0);
  //默认缩放值
  const scale = {
    width: '1920',
    height: '1080'
  };

  //设计稿尺寸
  const baseWidth = 1920;
  const baseHeight = 1080;
  //需保持的比例（默认为1.77778）
  const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));
  const calcRate = () => {
    //当前宽高比
    const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5));
    if (appRef.value) {
      console.log("calc");
      if (currentRate > baseProportion) {
        //表示更宽
        scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
        scale.height = (window.innerHeight / baseHeight).toFixed(5)
        appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
      } else {
        //表示更高
        scale.height = (window.innerWidth / baseProportion / baseHeight).toFixed(5)
        scale.width = (window.innerWidth / baseWidth).toFixed(5)
        appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
      }
    }

  }

  const resize = () => {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      calcRate();
    }, 200)
  }

  const windowDraw = () => {
    window.addEventListener('resize', resize)
    console.log("draw");
  }
  onMounted(() => {
    windowDraw();
    calcRate();
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })

  return {
    appRef,
  }
}