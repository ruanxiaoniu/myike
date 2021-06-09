/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-08 10:52:17
 * @LastEditTime: 2021-06-09 09:54:36
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//默认都有的路由
export const defaultRouter = [
  {
    path: "/login",
    name: 'login',
    component: () => import('@/views/login/index'), 
  }
]

const router = new Router({
  mode: 'history',
  routes: defaultRouter
})

// 导航守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router