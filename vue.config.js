// vue.config.js

module.exports = {
  publicPath: "/lokale/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/variables.scss";`,
      }
    }
  }
};
