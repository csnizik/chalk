/**
 * @file style-dictionary.config.js
 * @module style-dictionary-config
 * @description Configuration for the Style Dictionary to generate design tokens
 * for the custom theme.
 * @requires style-dictionary
 */

const StyleDictionary = require('style-dictionary')

/**
 * @typedef {Object} StyleDictionaryConfig
 * @property {string[]} source - Array of glob patterns to match design token definition files.
 * @property {Object} platforms - An object defining platform-specific configurations for output formats.
 * @property {Object} platforms.scss - Configuration for generating SCSS output.
 * @property {string} platforms.scss.transformGroup - The transform group to use for SCSS output.
 * @property {string} platforms.scss.buildPath - The output directory for the generated SCSS file.
 * @property {Object[]} platforms.scss.files - An array of file objects defining the SCSS output files.
 * @property {Object} platforms.css - Configuration for generating CSS output.
 * @property {string} platforms.css.transformGroup - The transform group to use for CSS output.
 * @property {string} platforms.css.buildPath - The output directory for the generated CSS file.
 * @property {Object[]} platforms.css.files - An array of file objects defining the CSS output files.
 * @property {Object} platforms.js - Configuration for generating JavaScript output.
 * @property {string} platforms.js.transformGroup - The transform group to use for JavaScript output.
 * @property {string} platforms.js.buildPath - The output directory for the generated JavaScript file.
 * @property {Object[]} platforms.js.files - An array of file objects defining the JavaScript output files.
 */

/**
 * @type {StyleDictionaryConfig}
 * @description Configuration object for the Style Dictionary.
 */
const styleDictionaryConfig = {
  source: ['./design-tokens/**/**/*.json'],
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
}

const styleDictionary = StyleDictionary.extend(styleDictionaryConfig)
styleDictionary.buildAllPlatforms()

module.exports = styleDictionaryConfig
