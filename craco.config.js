const path = require('path')

const CracoLessPlugin = require('craco-less')
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // less   npm install craco-less@2.1.0-alpha.0  根据package.json查看
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          }
        }
      }
    }
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve('src'),
      "components": resolve('src/components'),
      "utils": resolve('src/utils'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
