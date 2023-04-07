export default [
  {
    path: "/",
    redirect:'/login',
  },
  {
    path: "/login",
    component: () => import('../pages/Login.vue')
  }
]