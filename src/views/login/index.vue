<!--
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 09:16:03
 * @LastEditTime: 2021-06-09 16:02:20
-->
<template>
<div>
  <el-button type="primary" @click="clickLogin">登录</el-button>
</div>
</template>
<script>
import { Login } from '@/api/index'
export default {
  data(){
    return {
      
    }
  },
  methods: {
    clickLogin(){
      console.log('登录啦');
      Login().then(res => {
        console.log('获取到吗');
        console.log(res);
      })
    }
  }
}
</script>