let UglifyJsPlugin
UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production',
  uglifyJsPlugin = new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        drop_console: true,  // 注释console
        drop_debugger: true, // 注释debugger
        pure_funcs: ['console.log'], // 移除console.log
      },
    },
  })

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: {
    plugins: isProduction ?
      [uglifyJsPlugin] :
      []
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({remUnit: 75})
        ]
      }
    }
  }
};
