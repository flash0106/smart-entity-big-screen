<template>
  <div class="salary-rank">
    <v-chart :option="option" autoresize></v-chart>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { copyObj } from "../../../utils/tool";
import { realtimeBarOptions } from "../../../echarts/bar";
import service from "../../../mock/right/index";
//import service from "../../../service/right/index";
const props = defineProps({
  modelValue: {
    type: String,
  },
});
const emit = defineEmits();

const option = reactive({
  ...copyObj(realtimeBarOptions),
});
option.yAxis.max = 7;

function getSalaryRank(year) {
  let dataP = {
    year: year,
  };
  service.getSalaryRankData(dataP).then((res) => {
    option.yAxis.data = res.map((item) => item.name);
    option.series[0].data = res.map((item) => item.value);
  });
}

let index = 1;
const currentYear = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});
const yearArr = ["2021", "2020"];
setInterval(() => {
  currentYear.value = yearArr[index % 2];
  getSalaryRank(currentYear.value);
  index++;
}, 8000);

onMounted(() => {
  getSalaryRank(currentYear.value);
});
</script>

<style scoped lang='less'>
.salary-rank {
  height: 100%;
}
</style>