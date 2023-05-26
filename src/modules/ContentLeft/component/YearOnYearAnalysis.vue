<template>
  <div class="year-on-year-analysis-module">
    <v-chart
      :option="option"
      autoresize
      ref="yoyaPieChart"
      @mouseover="handleEvent"
    ></v-chart>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import { specialPieOptions } from "../../../echarts/pie";
import { copyObj } from "../../../utils/tool";
import service from "../../../mock/left/index";
//import service from "../../../service/left/index";
const option = reactive({
  ...copyObj(specialPieOptions),
});
option.title = {
  text: "同比区间(2021-2022)",
  textStyle: {
    color: "#fff",
  },
  right: 0,
  bottom: 0,
};

const yoyaPieChart = ref();
let currentIndex = 0;
function getYearOnYearAnalysis() {
  let dataP = {};
  service.getYearOnYearAnalysisData(dataP).then((res) => {
    option.series[0].data = res;
    nextTick(() => {
      yoyaPieChart.value.dispatchAction({
        type: "highlight",
        dataIndex: currentIndex,
      });
    });
  });
}

const handleEvent = (val) => {
  yoyaPieChart.value.dispatchAction({
    type: "downplay",
    dataIndex: currentIndex,
  });
  currentIndex = val.dataIndex;
  yoyaPieChart.value.dispatchAction({
    type: "highlight",
    dataIndex: currentIndex,
  });
};

onMounted(() => {
  getYearOnYearAnalysis();
});
</script>

<style scoped lang='less'>
.year-on-year-analysis-module {
  height: 100%;
}
</style>