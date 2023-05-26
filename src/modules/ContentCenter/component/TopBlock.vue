<template>
  <div class="top-block">
    <normal-block>
      <template #content>
        <div class="top-data">
          <div class="top-data__left">
            <div class="top-data__left-label">省内就业</div>
            <div class="top-data__left-value">
              <span id="province-inside"> {{ state.province_inside }}</span>
              <span>%</span>
            </div>
          </div>
          <div class="top-data__right">
            <div class="top-data__right-label">省外就业</div>
            <div class="top-data__right-value">
              <span id="province-outside">{{ state.province_outside }}</span
              ><span>%</span>
            </div>
          </div>
        </div>
      </template>
    </normal-block>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { rollNum } from "../../../utils/tool";
import NormalBlock from "../../NormalBlock.vue";
import service from "../../../mock/center/index";
//import service from "../../../service/center/index";
const state = reactive({
  province_inside: "",
  province_outside: "",
});
function getProvinceRate() {
  let dataP = {
    year: "2022",
    stu_type: "undergraduate",
  };
  service.getProvinceRate(dataP).then((res) => {
    state.province_inside = (res.province_inside * 100).toFixed(2);
    state.province_outside = (res.province_outside * 100).toFixed(2);
    rollNum(
      "province-inside",
      res.province_inside * 25,
      res.province_inside * 100,
      2
    );
    rollNum(
      "province-outside",
      res.province_outside * 25,
      res.province_outside * 100,
      2
    );
  });
}

onMounted(() => {
  getProvinceRate();
});
</script>

<style scoped lang='less'>
@import "../../../assets/less/system-color.less";
.top-block {
  width: 100%;
  :deep(.normal-block-module) {
    height: 100%;
  }
  .top-data {
    height: 100%;
    display: flex;
    &__left,
    &__right {
      width: 50%;
      &-label {
        font-family: "special";
        font-size: 28px;
        color: @font-main;
        text-align: center;
        height: 30px;
        line-height: 30px;
      }
      &-value {
        font-family: "ding";
        font-size: 64px;
        height: calc(100% - 30px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__left {
      &-value {
        color: #ec5a7b;
      }
    }
    &__right {
      &-value {
        color: #3478f5;
      }
    }
  }
}
</style>