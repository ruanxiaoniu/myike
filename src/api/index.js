/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 15:34:26
 * @LastEditTime: 2021-06-09 17:27:15
 */
import http from '@/axios/http'

export function Login() {
  return http({
    url: '/api/login',
    method: 'get',
  })
}