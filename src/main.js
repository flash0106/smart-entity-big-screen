import { createApp } from 'vue'
import App from './App.vue';
import "./assets/less/entry";
import router from "./router/index";
import "echarts";
import 'echarts-gl';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import elementMethods from "./utils/element";
import ctIcon from "cingta-icon";

//创建vue实例
const app = createApp(App)
//挂载element-plus
app.use(ElementPlus, {
  locale: {
    ...zhCn,
    el: {
      ...zhCn.el,
    }
  },
})
//全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
//定义element全局方法
Object.keys(elementMethods).forEach((key) => {
  app.provide(`${key}`, elementMethods[key]);
  app.config.globalProperties[key] = elementMethods[key];
});

app.use(ctIcon)
app.use(router)
import VChart from 'vue-echarts';
app.component('VChart', VChart)
//挂载实例
app.mount('#app')
