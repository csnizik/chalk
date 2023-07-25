# Chalk Theme

- [Chalk Theme](#chalk-theme)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Design Tokens](#design-tokens)
  - [Generating Design Tokens](#generating-design-tokens)
  - [Sample Token File](#sample-token-file)

## Introduction

Chalk takes an [atomic](https://atomicdesign.bradfrost.com/) approach to website theming, allowing users to create highly versatile and customized site designs.

Chalk uses tokens, which are built using [Style Dictionary](https://amzn.github.io/style-dictionary/#/README), a build system that allows you to define styles that maintain consistency and cohesion. It includes three tiers of design tokens: `1-foundation`, `2-framework`, and `3-feature`, each with its own set of token files.
## Installation

Install the required dependencies with `npm install` or `yarn install` in the theme's root directory.
## Design Tokens


1. **Foundation tokens**: This tier contains the core design tokens that form the foundation of the theming system. It encompasses tokens for background colors, breakpoints, typography, colors (brand, neutral, accent), display properties, flexbox, and more. These tokens provide the essential building blocks for creating a consistent visual experience. *Foundation tokens are not used directly in your styles.*

2. **Framework tokens**: Building upon the foundation tokens, this tier introduces contextual tokens specific to the framework and components used in Chalk. Tokens for border styles, box shadows, pseudo-classes, and size variations are found in this tier. These tokens customize the look and feel of components and elements within the theming system.

3. **Feature tokens**: The final tier defines tokens specific to individual features and components within Chalk. Although this tier currently appears to be empty, it is designed to accommodate feature-specific tokens in the future. This allows for further customization and extensibility.

## Generating Design Tokens

The scripts that construct the tokens are in the `utils` directory.  Tokens are output in SCSS, CSS, and JavaScript. This makes it easy to integrate the design tokens into different parts of the theming system.

- Build tokens and CSS with `npm run build`.
- Watch for changes and rebuild: `npm run watch`.

## Sample Token File

Below is an example of the design token file for the `1-foundation/color.js` file:

```javascript
const processTokens = require('../../utils/processTokens');

const color = {
  brand: {
    true: {
      tulanegreen: '#336666',
      tulaneblue: '#71C5E8',
    },
    // Other brand colors...
  },
  neutral: {
    // Neutral colors...
  },
  core: {
    true: {
      red: '#F00',
      green: '#0F0',
      blue: '#00F',
    },
    // Other core colors...
  },
};

module.exports = {
  foundationColor: processTokens.generateColorShades(color),
};
```
