<template>
  <div class="header-bar">
    <div class="logout-icon">
      <ct-icon
        name="logout_line"
        color="#a5ccf2"
        size="20"
        style="cursor: pointer"
        @click="doLogout"
      ></ct-icon>
    </div>
    <div class="header-bar__left">
      欢迎您，{{ userSource.realname
      }}{{ userSource.role.label == "管理员" ? userSource.role.label : "" }}
      <ct-icon
        name="set_solid"
        color="#a5ccf2"
        size="20"
        style="cursor: pointer"
        @click="openSetting"
        v-if="userSource.role.value === 0"
      ></ct-icon>
    </div>
    <div class="header-bar__center">
      <p>{{ title }}</p>
    </div>
    <div class="header-bar__right">当前时间：{{ time }}</div>
    <add-user-dialog v-model="dialogVisible"></add-user-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from "vue";
import { useTime } from "../hooks/useTime.js";
import AddUserDialog from "./AddUserDialog.vue";
import { useRouter } from "vue-router";
const $open = inject("$open");
const $router = useRouter();
const props = defineProps({
  title: String,
});

// 时间相关
let { nowTime } = useTime();
let timer = null;
let time = ref(nowTime.value);
timer = setInterval(() => {
  time.value = useTime().nowTime.value;
}, 1000);

//用户信息与权限相关
const userSource = localStorage.getItem("userSource")
  ? JSON.parse(localStorage.getItem("userSource"))
  : {};

const dialogVisible = ref(false);
const openSetting = () => {
  dialogVisible.value = true;
};
const doLogout = () => {
  $open("退出登录成功", "success");
  $router.push({ path: "/login" });
};
</script>

<style scoped lang='less'>
@import "../assets/less/system-color.less";
.header-bar {
  width: 100%;
  height: 9%;
  background-image: url(../assets/img/system/header-bar.png);
  background-size: cover;
  background-position: center center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "special";
  position: relative;
  .logout-icon {
    position: absolute;
    left: 20px;
    top: 10px;
  }
  &__left,
  &__right {
    width: 27%;
    font-size: 26px;
    color: @font-main;
  }
  &__center {
    width: 46%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 36px;
      color: @font-main;
    }
  }
}
</style>