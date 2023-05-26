<template>
  <div class="content-center-module">
    <top-block></top-block>
    <employment-area @getCurrentCity="getCurrentCity"></employment-area>
    <bottom-block :city="currentCity"></bottom-block>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import TopBlock from "./component/TopBlock.vue";
import BottomBlock from "./component/BottomBlock.vue";
import EmploymentArea from "./component/EmploymentArea.vue";

const currentCity = ref("杭州市");
const getCurrentCity = (val) => {
  currentCity.value = val;
};
</script>

<style scoped lang='less'>
.content-center-module {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top-block {
    height: 15%;
  }
  .employment-area {
    height: 60%;
  }
  .bottom-block {
    height: 25%;
  }
}
</style>