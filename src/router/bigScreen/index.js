export default [
  {
    path: "/mainPage",
    component:()=>import("../pages/MainPage.vue")
  },
  {
    path: "/studentEmploy",
    component: () => import('../pages/StudentEmploy.vue')
  }
]