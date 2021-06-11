<!--
 * @Author: RYL
 * @Description: 整体布局
 * @Date: 2021-06-11 15:30:54
 * @LastEditTime: 2021-06-11 16:00:56
-->
<template>
  <el-container>
    <el-aside>左侧导航</el-aside>
    <el-container>
      <el-header>面包屑</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
   
  </el-container>
</template>
<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<style lang="scss" scoped>
$global_color: #2d3a4b;
.el-container {
  min-height: 100%;
  .el-aside {
    color: white;
    background-color: $global_color;
  }
}

</style>