<template>
  <div class="content-right-module">
    <normal-block title="专业就业薪资排名">
      <template #handle>
        <div class="show-year">{{ showTerm }}届本科</div>
      </template>
      <template #content>
        <salary-rank v-model="showTerm" />
      </template>
    </normal-block>
    <normal-block title="重点单位就业排名">
      <template #handle>
        <div class="show-year">{{ showYear }}</div>
      </template>
      <template #content>
        <key-unit v-model="showYear" />
      </template>
    </normal-block>
    <normal-block title="对母校满意度">
      <template #content>
        <satisfaction />
      </template>
    </normal-block>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import NormalBlock from "../NormalBlock.vue";
import KeyUnit from "./component/KeyUnit.vue";
import SalaryRank from "./component/SalaryRank.vue";
import Satisfaction from "./component/Satisfaction.vue";

const showYear = ref("2022");

const showTerm = ref("2021");
</script>

<style scoped lang='less'>
@import "../../assets/less/system-color.less";
.content-right-module {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .show-year {
    font-family: "special";
    font-size: 20px;
    color: @font-main;
  }
}
</style>