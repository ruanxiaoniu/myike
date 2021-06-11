/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-08 10:52:17
 * @LastEditTime: 2021-06-11 16:03:12
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/index'
Vue.use(Router)

//默认都有的路由
export const defaultRouter = [
  {
    path: "/login",
    name: 'Login',
    component: () => import('@/views/login/index'), 
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: defaultRouter
})

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  next()
})

export default router