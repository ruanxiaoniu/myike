/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 15:51:52
 * @LastEditTime: 2021-06-09 16:45:39
 */
import axios from 'axios'

// 创建实例
const http = axios.create({
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

// 拦截器
http.interceptors.request.use(config => {
  console.log('config');
  console.log(config);
  return config
},
  error => {
    Promise.reject(error)
  })

http.interceptors.response.use(response => {
  console.log('返回');
  console.log(response);
  return response
}, error =>{
  return Promise.reject(error)
})

export default http