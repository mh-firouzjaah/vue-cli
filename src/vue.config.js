// this file is created just to add some options to the css-preloader
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // only variables, mixins and functions should be loaded globally
        // because other sass/scss objects mat result in replication in all components
        // note that variables, mixins and functions won't be complied in the final css file
        data: `@import "~@/assets/scss/variables.scss";@import "~@/assets/scss/mixins.scss";`,
      },
    },
  },
};
