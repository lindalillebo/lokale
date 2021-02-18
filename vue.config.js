// vue.config.js

module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/variables.scss";`,
      },
    },
  },
};
