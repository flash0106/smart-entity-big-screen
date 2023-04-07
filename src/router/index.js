import { createRouter, createWebHashHistory } from "vue-router";
import loginRoute from "./login";
import bigScreenRoute from "./bigScreen";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...loginRoute,
    ...bigScreenRoute,
  ],
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  next();
});
export default router;