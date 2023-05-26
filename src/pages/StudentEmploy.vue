<template>
  <div class="student-employ-page" ref="appRef">
    <div class="student-employ-page__bg-cover"></div>
    <header-bar title="高校就业信息分析大屏"></header-bar>
    <div class="main-content">
      <div class="main-content__left">
        <content-left />
      </div>
      <div class="main-content__middle">
        <content-center />
      </div>
      <div class="main-content__right">
        <content-right />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import HeaderBar from "../components/HeaderBar.vue";
import ContentLeft from "../modules/ContentLeft/ContentLeft.vue";
import ContentCenter from "../modules/ContentCenter/ContentCenter.vue";
import ContentRight from "../modules/ContentRight/ContentRight.vue";
import { useScale } from "../hooks/useScale";

const { appRef } = useScale();
</script>

<style scoped lang='less'>
.student-employ-page {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  &__bg-cover {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/system/page-bg.png");
    background-size: cover;
    background-position: center center;
  }
  .main-content {
    display: flex;
    justify-content: space-between;
    height: 90%;
    padding: 10px;
    &__left {
      width: 26%;
    }
    &__middle {
      width: 46%;
    }
    &__right {
      width: 26%;
    }
  }
}
</style>