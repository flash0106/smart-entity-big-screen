<template>
  <div class="content-left-module">
    <normal-block title="2022就业去向落实率">
      <template #content>
        <employment-rate />
      </template>
    </normal-block>
    <normal-block title="就业去向落实率——趋势分析">
      <template #content>
        <trend-analysis />
      </template>
    </normal-block>
    <normal-block title="就业去向落实率——同比分析">
      <template #content>
        <year-on-year-analysis />
      </template>
    </normal-block>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import NormalBlock from "../NormalBlock.vue";
import EmploymentRate from "./component/EmploymentRate.vue";
import TrendAnalysis from "./component/TrendAnalysis.vue";
import YearOnYearAnalysis from "./component/YearOnYearAnalysis.vue";
</script>

<style scoped lang='less'>
.content-left-module {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>