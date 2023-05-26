<template>
  <div class="trend-analysis-module">
    <v-chart :option="option" autoresize></v-chart>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { stackLineOptions } from "../../../echarts/line";
import { copyObj } from "../../../utils/tool";
import service from "../../../mock/left/index";
//import service from "../../../service/left/index";
const option = reactive({
  ...copyObj(stackLineOptions),
});

function getTrendAnalysis() {
  let dataP = {};
  service.getTrendAnalysisData(dataP).then((res) => {
    let yearArr = Object.keys(res);
    option.xAxis.data = yearArr;
    let seriesData = [];
    //初始化series数组
    res[yearArr[0]].forEach((item) => {
      seriesData.push({
        name: item.name,
        type: "line",
        stack: "total",
        data: [],
        areaStyle: {},
      });
    });
    //放入数据
    seriesData.forEach((item) => {
      let itemData = [];
      yearArr.forEach((year) => {
        itemData.push(res[year].find((atom) => atom.name == item.name).value);
      });
      item.data = itemData;
    });
    option.series = seriesData;
  });
}

onMounted(() => {
  getTrendAnalysis();
});
</script>

<style scoped lang='less'>
.trend-analysis-module {
  height: 100%;
}
</style>




