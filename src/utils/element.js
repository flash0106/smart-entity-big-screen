import { ElMessage, ElMessageBox } from "element-plus";
// import clipBorad from "vue-clipboard3";
const durationValue = 1000;
function $message(str, type = "warning", duration = durationValue) {
    if (typeof str === 'object') {
        ElMessage(str)
    } else {
        ElMessage({
            message: str,
            type: type,
            duration: duration,
        });
    }
}
function $open(str, type, duration = durationValue) {
    let flag = sessionStorage.getItem('isNeedLogin')
    if (!flag) {
        if (type) {
            ElMessage({ message: str, type: type, duration: duration, });
        } else {  //否则是系统抛出
            ElMessage({ message: str + '时，系统错误', type: 'warning', duration: duration, });
        }
    }
}
function $warn(str, duration = durationValue) {
    $message(str, "warning", duration);
}
function $success(str, duration = durationValue) {
    $message(str, "success", duration);
}
function $info(str, duration = durationValue) {
    $message(str, "info", duration);
}
function $error(str, duration = durationValue) {
    $message(str, "error", duration);
}
function $confirm(str, methods, methods2 = () => { }, obj) {
    let obj2 = { title: "提示", confirm: "确定", cancel: "取消", type: "warning" };
    if (obj && Object.keys(obj).length) {
        for (let key in obj) {
            obj2[key] = obj[key];
        }
    }
    return ElMessageBox.confirm(str, obj2.title, {
        confirmButtonText: obj2.confirm,
        cancelButtonText: obj2.cancel,
        type: obj2.type,
    }).then(() => {
        if (typeof methods === 'function') {
            methods();
        }
    }).catch((e) => {
        console.log(e);
        if (typeof methods2 === 'function') {
            methods2();
        }
        if (typeof methods === 'function') {
            $info("已取消");
        }
        throw { message: "已取消" }
    });
}
function $newConfirm(str, methods, methods2 = () => { }, obj) {
    let obj2 = { title: "提示", confirm: "确定", cancel: "取消", type: "warning", content: "" };
    if (obj && Object.keys(obj).length) {
        for (let key in obj) {
            obj2[key] = obj[key];
        }
    }
    return ElMessageBox.confirm(str, obj2.title, {
        confirmButtonText: obj2.confirm,
        cancelButtonText: obj2.cancel,
        type: obj2.type,
        confirmButtonClass: `${obj2.type}-type`,
        customClass: `confirm-box ${obj2.type}`
    }).then(() => {
        if (typeof methods === 'function') {
            methods();
        }
    }).catch((e) => {
        console.log(e);
        if (typeof methods2 === 'function') {
            methods2();
        }
        if (typeof methods === 'function') {
            openMethod("已取消", "info");
        }
        throw { message: "已取消" }
    });
}
// const { toClipboard } = clipBorad();
// async function $copy(text) {
//   try {
//     await new Promise((resolve, reject) => {
//       toClipboard(text)
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((e) => {
//           reject(e);
//         });
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }
export default {
    $open,
    $message,
    $warn,
    $success,
    $info,
    $error,
    $confirm,
    $newConfirm
    //   $copy,
}
