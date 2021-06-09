/*
 * @Author: RYL
 * @Description:
 * @Date: 2021-06-08 10:45:42
 * @LastEditTime: 2021-06-08 10:53:45
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
