const { defineConfig } = require('@vue/cli-service');
require('dotenv').config();

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? '/Bookshelf-app/' : '/',
  publicPath: '/Bookshelf-app/',
});
