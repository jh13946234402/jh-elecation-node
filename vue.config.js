const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  resolve: {
    // alias: {
    //   // eslint-disable-next-line no-undef
    //   "@": resolve("src"),
    // },
    // fallback: {
    //   path: require.resolve("path-browserify"),
    // },
  }
})
