/*
 * @Author: RYL
 * @Description:
 * @Date: 2021-06-08 10:45:42
 * @LastEditTime: 2021-06-11 11:11:06
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import '@/style/index.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
