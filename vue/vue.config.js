// eslint-disable-next-line @typescript-eslint/no-var-requires
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsImportPluginFactory = require('ts-import-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('webpack-merge')

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
  publicPath: '/vue',
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
  parallel: false, // 处理生产时vant自动引入样式失败
  chainWebpack(config) {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  },
};
