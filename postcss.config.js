const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  "plugins": [
    postcssImport,
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    process.env.NODE_ENV === "production"? purgecss({
      content: [
          "./src/**/*.html", 
          "./src/**/*.vue"
      ]
    }): "",
    autoprefixer,
  ]
};
