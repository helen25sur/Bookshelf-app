const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  // Якщо ваш проєкт лежить у підпапці (як Bookshelf-app на GitHub), розкоментуйте рядок нижче:
  publicPath: '/',

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
