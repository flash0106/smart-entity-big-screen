<template>
  <div class="normal-block-module">
    <div class="normal-block-module__title" v-if="props.title">{{ title }}</div>
    <div class="normal-block-module__top" v-if="props.title">
      <slot name="handle"></slot>
    </div>
    <div
      class="normal-block-module__content"
      :class="props.title ? 'have-title' : 'no-title'"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped lang='less'>
.normal-block-module {
  width: 100%;
  height: 33%;
  position: relative;
  &__title {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    font-family: "special";
    height: 28px;
    color: #a5ccf2;
    padding: 5px 0 0 10px;
  }
  &::before {
    display: block;
    position: absolute;
    top: -5px;
    left: -2px;
    content: "";
    width: 111px;
    height: 35px;
    background-image: url("../assets/img/system/border1.png");
    transform: rotate(180deg);
  }
  &::after {
    display: block;
    position: absolute;
    bottom: -5px;
    right: -2px;
    content: "";
    width: 111px;
    height: 35px;
    background-image: url("../assets/img/system/border1.png");
  }
  &__top {
    height: 28px;
    padding: 5px 10px 0 10px;
    text-align: right;
  }
  &__content {
    &.have-title {
      height: calc(100% - 28px);
    }
    &.no-title {
      height: 100%;
    }
  }
}
</style>