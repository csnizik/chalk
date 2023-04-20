const StyleDictionary = require('style-dictionary')

const styleDictionary = StyleDictionary.extend({
  source: ['./design-tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: './src/sass/tokens/',
      files: [
        {
          destination: '_design-tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: './src/css/tokens/',
      files: [
        {
          destination: 'design-tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: './src/js/tokens/',
      files: [
        {
          destination: 'design-tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
})

styleDictionary.buildAllPlatforms()
