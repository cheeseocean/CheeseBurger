const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    configure(config, {env, paths}) {
      config.output.publicPath = '/react'
      return config
    }
  },
  style: {
    postcss: {
      // mode: 'file',
      // plugins: (plugins) => [require('postcss-px2rem')({remUnit: 75})].concat(plugins)
      // plugins: () => [require('postcss-px2rem')()]
      loaderOptions: {
        // ident: 'postcss',
        plugins: () => [require('postcss-plugin-px2rem')({rootValue: 37.5})]
      }
    }
  }
}
