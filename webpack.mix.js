// webpack.mix.js

let mix = require('laravel-mix');

mix.postCss('src/theme.css', 'dist/dist.css', [
  require('postcss-custom-properties'),
]);
