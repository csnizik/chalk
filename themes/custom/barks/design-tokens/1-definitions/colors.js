const processTokens = require('../../utils/processTokens')

const colors = {
  brand: {
    true: {
      tulanegreen: '#336666',
      tulaneblue: '#71C5E8',
    },
    stormshutters: '#00778B', // if key is camelCase, an extra dash - will be added to the tokens, which may not be desirable; i.e. if this was `tulaneGreen`, the resulting tokens would be `$color-brand-tulane-green-20`, etc.
    mardigras: '#78BE20',
    olivebranch: '#658D1B',
    medallion: '#cc9900',
    avenueblue: '#005558C',
    neutral: {
      // the colors in this nested object will be tokenized as `$color-brand-neutral-limestone-80`, etc. This allows for different values for color.brand.neutral.name and color.neutral.name, for example.
      limestone: '#D0DEBB',
      neutralgrounds: '#796E65',
      deltablue: '#B9D9EB',
      spanishmoss: '#54585A',
      crepemyrtle: '#E9CDD0',
    },
    accent: {
      crawfest: '#CC0033',
      azalea: '#c6007E',
      verdigris: '#71DBD4',
    },
    white: '#D9D9Da', // use if brand colors define a custom 'white'
    black: '#2e2e45', // use if brand colors define a custom 'black'
  },
  core: {
    // core can be used for any colors that are not defined by the brand but that will need to be used on the site
    true: {
      red: '#FF0000',
      green: '#00FF00',
      blue: '#0000FF',
    },
    aquamarine: '#7FFFD4',
    coral: '#FF7F50',
    goldenrod: '#DAA520',
    yellow: '#FFFF00',
  },
  neutral: {
    gray: '#464646', // this value will be the darkest gray
    black: '#000',
    white: '#fff',
  },
}

module.exports = {
  color: processTokens.generateShades(colors),
}
