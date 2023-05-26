<template>
  <div class="add-user-dialog">
    <el-dialog v-model="dialogVisible" title="新增用户">
      <el-form :model="dialog.form" :rules="dialog.rules" ref="formRef">
        <el-form-item prop="username" label="用户账号：">
          <el-input
            v-model="dialog.form.username"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="用户密码:">
          <el-input
            v-model="dialog.form.password"
            type="password"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item prop="realname" label="真实姓名:">
          <el-input
            v-model="dialog.form.realname"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item prop="role" label="用户角色:">
          <el-select v-model="dialog.form.role">
            <el-option
              v-for="(item, index) in dialog.roleList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, inject, watch } from "vue";
import { addNewUser as _addNewUser } from "../service/system";
const $open = inject("$open");
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});
const emit = defineEmits();

const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const dialog = reactive({
  form: {
    username: "",
    password: "",
    realname: "",
    role: "",
  },
  rules: {
    username: [{ required: true, message: "请输入用户账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入用户密码", trigger: "blur" }],
    realname: [{ required: true, message: "请输入真实姓名", trigger: "blur" }],
    role: [{ required: true, message: "请选择用户角色", trigger: "change" }],
  },
  roleList: [
    { label: "管理员", value: 0 },
    { label: "普通用户", value: 1 },
  ],
});

const formRef = ref(null);
const handleConfirm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      addNewUser();
    } else {
      $open("请填写完整信息", "warning");
    }
  });
};

function addNewUser() {
  let dataP = {
    username: dialog.form.username,
    realname: dialog.form.realname,
    password: md5(dialog.form.password),
    role: {
      label: dialog.roleList.find((item) => item.value == dialog.form.role)
        .label,
      value: dialog.form.role,
    },
  };
  _addNewUser(dataP).then((res) => {
    $open(res.message, "success");
    dialogVisible.value = false;
  });
}

watch(dialogVisible, (val) => {
  if (!val) {
    Object.keys(dialog.form).forEach((key) => {
      dialog.form[key] = "";
    });
  }
});
</script>

<style scoped lang='less'>
</style>