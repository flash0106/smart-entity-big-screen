<template>
  <div class="login-page" ref="appRef">
    <!-- 背景图 -->
    <div class="login-page__bg-cover"></div>
    <div class="login-page__container">
      <div class="login-page__container-title">账号登录</div>
      <div class="login-page__container-content">
        <el-input v-model="user.account" placeholder="请输入账号">
          <template #prefix>
            <img src="../assets/img/system/icon-user.svg" alt="" />
          </template>
        </el-input>
        <el-input
          v-model="user.password"
          placeholder="请输入密码"
          :type="showPassword ? 'text' : 'password'"
          @keyup.enter="doLogin(1)"
        >
          <template #prefix>
            <img src="../assets/img/system/icon-pw.svg" alt="" />
          </template>
          <template #suffix>
            <img
              src="../assets/img/system/icon-hidePw.svg"
              alt=""
              @click="changeShowPassword"
              v-if="!showPassword"
            />
            <img
              src="../assets/img/system/icon-showPw.svg"
              alt=""
              @click="changeShowPassword"
              v-else
            />
          </template>
        </el-input>
        <div class="suffix-info">
          <el-checkbox v-model="needRemember" @change="handleRememberMe"
            >记住我</el-checkbox
          >
          <el-tooltip placement="right" content="请联系开发人员"
            ><span class="forget-pw">忘记密码?</span></el-tooltip
          >
        </div>
        <div class="login-btn">
          <el-button type="primary" @click="doLogin(2)">登 录</el-button>
        </div>
        <div class="bottom-hint">- 建议使用Chrome或IE9以上浏览 -</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from "vue";
import { useScale } from "../hooks/useScale";
import { login } from "../service/system";
import { useRouter } from "vue-router";
const { appRef } = useScale();
const $router = useRouter();
const $open = inject("$open");
const user = reactive({
  account: "",
  password: "",
});
const showPassword = ref(false);
const changeShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const needRemember = ref(false);
const handleRememberMe = () => {
  if (needRemember.value) {
    localStorage.setItem("username", window.btoa(user.account));
    localStorage.setItem("password", window.btoa(user.password));
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
};

function doLogin(type) {
  var pw = md5(user.password);
  handleRememberMe();
  if (pw == "" || user.account == "") {
    if (type !== 1) {
      $open("用户名或密码不能为空！", "warning");
      // alert("用户名或密码不能为空！");
    }
  } else {
    loginApi(pw, user.account);
  }
}
function loginApi(pw, username) {
  let dataP = {
    password: pw,
    username: username,
  };
  login(dataP)
    .then((res) => {
      if (res.state == 0) {
        $open("登录成功", "success");
        $router.push({ path: "/studentEmploy" });
        let userSource = res.data;
        localStorage.setItem("userSource", JSON.stringify(userSource));
      } else {
        $open(res.data, "warning");
      }
    })
    .catch((err) => {
      console.log(err);
      $open("系统错误！！！", "warning");
    });
}
</script>
<style scoped lang='less'>
.login-page {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  &__bg-cover {
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/system/login-bg.jpg");
    background-size: cover;
    background-position: center center;
  }
  &__container {
    width: 400px;
    height: 560px;
    background: #ffffff;
    box-shadow: 0px 16px 60px 0px rgba(29, 49, 126, 0.16);
    border-radius: 8px;
    position: absolute;
    top: 50%;
    right: 230px;
    transform: translate(0, -50%);
    padding: 56px 48px 0;
    overflow: hidden;
    &-title {
      height: 22px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      line-height: 22px;
      margin-bottom: 56px;
    }
    &-content {
      :deep(.el-input) {
        height: 48px;
        line-height: 48px;
        border-radius: 6px;
        border: 1px solid #dbdde1;
        margin-bottom: 20px;

        .el-input__wrapper {
          padding: 1px 14px;
          box-shadow: none;
        }
        .el-input__prefix-inner > :last-child {
          margin-right: 12px;
        }
        .el-input__inner::placeholder {
          color: #979da3;
        }
        /* 谷歌 */
        .el-input__inner::-webkit-input-placeholder {
          color: #979da3;
        }
        /* 火狐 */
        .el-input__inner:-moz-placeholder {
          color: #979da3;
        }
        /*ie*/
        .el-input__inner:-ms-input-placeholder {
          color: #979da3;
        }
        .el-input__suffix {
          cursor: pointer;
        }
      }

      .suffix-info {
        margin-top: -4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :deep(.el-checkbox) {
          .el-checkbox__label {
            height: 20px;
            line-height: 20px;
            color: #3c414e;
            font-weight: 400;
          }
          .el-checkbox__inner {
            border-radius: 3px;
          }
        }
        .forget-pw {
          color: #838a91;
        }
      }
      .login-btn {
        margin-top: 72px;
        :deep(.el-button) {
          width: 100%;
          height: 48px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          background: #060f5a;
          border-color: #060f5a;
        }
      }
      .bottom-hint {
        position: absolute;
        bottom: 0;
        left: 0;
        background: #f1f4f9;
        width: 100%;
        height: 44px;
        line-height: 44px;
        color: #979da3;
        font-size: 13px;
        text-align: center;
      }
    }
  }
}
</style>