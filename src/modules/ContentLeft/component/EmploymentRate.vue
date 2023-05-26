<template>
  <div class="employment-rate-module">
    <v-chart
      :option="option"
      autoresize
      ref="erPieChart"
      @mousemove="handleEvent"
    ></v-chart>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import { copyObj } from "../../../utils/tool";
import { pieOptions } from "../../../echarts/pie";
import service from "../../../mock/left/index";
//import service from "../../../service/left/index";
const option = reactive({
  ...copyObj(pieOptions),
});

const erPieChart = ref();
let currentIndex = 0;
function getEmploymentRate() {
  let dataP = {
    type: "undergraduate",
  };
  service.getEmploymentRateData(dataP).then((res) => {
    option.series[0].data = res;
    nextTick(() => {
      erPieChart.value.dispatchAction({
        type: "highlight",
        dataIndex: currentIndex,
      });
    });
  });
}

const handleEvent = (val) => {
  erPieChart.value.dispatchAction({
    type: "downplay",
    dataIndex: currentIndex,
  });
  currentIndex = val.dataIndex;
  erPieChart.value.dispatchAction({
    type: "highlight",
    dataIndex: currentIndex,
  });
};

onMounted(() => {
  getEmploymentRate();
});
</script>

<style scoped lang='less'>
.employment-rate-module {
  height: 100%;
}
</style>