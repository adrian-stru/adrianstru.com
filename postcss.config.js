const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  "plugins": [
    postcssImport,
    tailwindcss('./tailwind.js'),
    (process.env.NODE_ENV === "production") ? purgecss({
      content: ['./src/**/*.vue',  "./src/**/*.html", './public/**/*.html'],
      extractors: [
        {
            extractor: class TailwindExtractor {
                static extract(content) {
                    return content.match(/[A-z0-9-:\/]+/g) || [];
                }
            },
            extensions: ['vue']
        }
      ],
    }) : "",
    autoprefixer,
    cssnano({
      preset: 'default',
    }),
  ]
};
