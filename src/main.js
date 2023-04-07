import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

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
//挂载实例
app.mount('#app')
