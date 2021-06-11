/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 12:01:45
 * @LastEditTime: 2021-06-11 14:20:41
 */
module.exports = {
  publicPath: '/',
  // webpack相关配置
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      // 为生产环境修改配置
    }else{
      // 为开发环境修改配置
    }
  },
  // 链式操作
  chainWebpack: config =>{
    
  },
  devServer: {
    // 跨域启用代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {}
  }
}