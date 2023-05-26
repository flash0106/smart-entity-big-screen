<template>
  <div class="satisfaction-radar">
    <v-chart class="radar-chart" :option="options" autoresize></v-chart>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { radarOptions } from "../../../echarts/radar";
import service from "../../../mock/right/index";
//import service from "../../../service/right/index";
const options = reactive({
  ...radarOptions,
});
options.legend.data = ["本校", "全省平均"];
options.radar.indicator = [
  { name: "总体满意度", max: 100 },
  { name: "实践教学成果", max: 100 },
  { name: "教学水平", max: 100 },
  { name: "就业求职服务", max: 100 },
  { name: "师德师风", max: 100 },
  { name: "校风学风", max: 100 },
];

function getSatisfactionData() {
  let dataP = {
    year: "2022",
  };
  service.getSatisfactionData(dataP).then((res) => {
    options.series[0].data = res;
  });
}

onMounted(() => {
  getSatisfactionData();
});
</script>

<style scoped lang='less'>
.satisfaction-radar {
  height: 100%;
}
</style>