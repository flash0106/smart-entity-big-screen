<template>
  <div class="key-unit-chart">
    <v-chart :option="option" autoresize></v-chart>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
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
  ...realtimeBarOptions,
});

function getKeyUnit(year) {
  let dataP = {
    year: year,
  };
  service.getKeyUnitData(dataP).then((res) => {
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
const yearArr = ["2022", "2021", "2019"];
setInterval(() => {
  currentYear.value = yearArr[index % 3];
  getKeyUnit(currentYear.value);
  index++;
}, 8000);

onMounted(() => {
  getKeyUnit(currentYear.value);
});
</script>

<style scoped lang='less'>
.key-unit-chart {
  height: 100%;
}
</style>