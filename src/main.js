/*
 * @Author: RYL
 * @Description:
 * @Date: 2021-06-08 10:45:42
 * @LastEditTime: 2021-06-09 15:40:39
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
