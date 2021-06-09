/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 12:01:45
 * @LastEditTime: 2021-06-09 17:48:55
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
  devServer: {
    // 跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        ws: true,
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