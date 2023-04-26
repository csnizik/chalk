const processTokens = require('../../utils/processTokens')

// Keys should be lowercase. If key is camelCase, an extra dash - will be added to the tokens, which may not be desirable; i.e. `stormShutters` would create tokens `$color-brand-storm-shutters-20`, etc.
const color = {
  brand: {
    true: {
      // Any colors that should not be altered can be "protected" by using a subdirectory, "true". These colors will only generate a single token, i.e. colors.brand.true.tulanegreen; no additional shades will be created for these.
      tulanegreen: '#336666',
      tulaneblue: '#71C5E8',
    },
    stormshutters: '#00778B',
    mardigras: '#78BE20',
    olivebranch: '#658D1B',
    medallion: '#cc9900',
    avenueblue: '#00558C',
    neutral: {
      // Nested colors will be tokenized as `$color-brand-neutral-limestone-80`, etc. This allows for different values for color.brand.neutral.name and color.neutral.name, for example.
      limestone: '#D0DEBB',
      neutralgrounds: '#796E65',
      deltablue: '#B9D9EB',
      spanishmoss: '#54585A',
      crepemyrtle: '#E9CDD0',
    },
    accent: {
      crawfest: '#CC0032',
      azalea: '#c6007E',
      verdigris: '#71DBD4',
    },
    white: '#FFF', // Any color with the name "black" or "white" will only generate a single token; no shades will be added.
    black: '#2e2e45',
  },
  // Add any colors that are not defined as 'brand' colors but that will need to be used anywhere on the site.
  core: {
    true: {
      red: '#F00',
      green: '#0F0',
      blue: '#00F',
    },
    aquamarine: '#7FFFD4',
    coral: '#FF7F50',
    goldenrod: '#DAA520',
    yellow: '#FFFF00',
  },
  neutral: {
    gray: '#464646',
  },
}

module.exports = {
  founColor: processTokens.generateColorShades(color),
}
