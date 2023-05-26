<template>
  <div class="bottom-block">
    <normal-block>
      <template #content>
        <div class="bottom-block__title">2022{{ props.city }}就业信息</div>
        <div class="bottom-block__content">
          <div class="left-content">
            <div class="left-content__value">{{ state.number }}</div>
            <div class="left-content__label">就业人数</div>
          </div>
          <div class="right-content">
            <div class="right-content__value">{{ state.rate }}%</div>
            <div class="right-content__label">占全省比例</div>
          </div>
        </div>
      </template>
    </normal-block>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import NormalBlock from "../../NormalBlock.vue";
import service from "../../../mock/center/index";
//import service from "../../../service/center/index";
const props = defineProps({
  city: {
    type: String,
  },
});

watch(
  () => props.city,
  () => {
    getCityData();
  },
  {
    immediate: true,
  }
);

const state = reactive({
  number: 0,
  rate: 0,
});
function getCityData() {
  let dataP = {
    city: props.city,
  };
  service.getCityData(dataP).then((res) => {
    console.log(res);
    state.number = res.num;
    state.rate = res.value;
  });
}
</script>

<style scoped lang='less'>
@import "../../../assets/less/system-color.less";
.bottom-block {
  width: 100%;
  :deep(.normal-block-module) {
    height: 100%;
  }
  &__title {
    font-size: 28px;
    font-family: "special";
    color: @font-main;
    text-align: center;
    line-height: 28px;
  }
  &__content {
    display: flex;
    height: calc(100% - 28px);
    .left-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      &__value {
        color: @color-red;
        font-family: "ding";
        font-size: 64px;
        text-align: center;
      }
      &__label {
        color: @font-main;
        font-family: "special";
        font-size: 48px;
        text-align: center;
      }
    }
    .right-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      &__value {
        color: @color-blue;
        font-family: "ding";
        font-size: 64px;
        text-align: center;
      }
      &__label {
        color: @font-main;
        font-family: "special";
        font-size: 48px;
        text-align: center;
      }
    }
  }
}
</style>