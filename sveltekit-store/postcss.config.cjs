const tailwindcss = require("tailwindcss");
const nesting = require('tailwindcss/nesting');
const autoprefixer = require("autoprefixer");
const cssnano = require('cssnano');

const config = {
  plugins: [
    nesting(),
    tailwindcss(),
    autoprefixer,
    cssnano
  ],
};

module.exports = config;
