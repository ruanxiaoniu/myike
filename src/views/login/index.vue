<!--
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 09:16:03
 * @LastEditTime: 2021-06-11 15:29:06
-->
<template>
<div class="container">
  <el-form id="login-form">
    <div id="form-title">登录</div>
    <el-form-item>
      <el-input>用户名</el-input>
    </el-form-item>
    <el-form-item>
      <el-input>密码</el-input>
    </el-form-item>
    <el-button size="small" type="primary">登录</el-button>
  </el-form>
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
<style lang="scss" scoped>
$global_color: #2d3a4b;
$letter_space: 20px;
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
}
#login-form{
  margin: 0 auto;
  color: white;
  width: 400px;
  height: 350px;
  padding: 20px 50px;
  #form-title{
    font-weight: bold;
    letter-spacing: $letter_space;
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
  }
  ::v-deep .el-input__inner{
    background-color: $global_color;
    border-color: grey;
    color: white;
  }
  .el-button{
    width: 100%;
    font-size: 18px;
    letter-spacing: $letter_space;
  }
}
// #login-form ::v-deep .el-input__inner{
//   background-color: $global_color;
// }
</style>