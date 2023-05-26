<template>
  <div class="employment-area">
    <div class="map-chart" id="mapEchart"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import * as echarts from "echarts";
import geoJSON from "../../../assets/json/zhejiang.json";
import { geo3DOptions } from "../../../echarts/geo3D";

const props = defineProps({
  city: {
    type: String,
  },
});
const emit = defineEmits();
function initChart() {
  var myChart = echarts.init(document.getElementById("mapEchart"));
  echarts.registerMap("zhejiang", geoJSON);
  myChart.hideLoading();
  myChart.setOption(geo3DOptions);
  myChart.on("mouseover", handleMouseOver);
  setTimeout(() => {
    myChart.dispatchAction({
      type: "highlight",
      geoIndex: 10,
    });
  });
}

function handleMouseOver(val) {
  console.log(val);
  emit("getCurrentCity", val.name);
}

onMounted(() => {
  initChart();
});
</script>

<style scoped lang='less'>
.employment-area {
  width: 100%;
  height: 100%;
  .map-chart {
    width: 100%;
    height: 100%;
  }
}
</style>