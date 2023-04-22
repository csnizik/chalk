const generateColorShades = require('../../scripts/generateShades')

const colors = {
  core: {
    blue: '#00539b',
    green: '#37702f',
    red: '#e70129',
  },
  brand: {
    blue: '#0241AD',
    brown: '#301C05',
    yellow: '#F4D47E',
    white: '#D9D9D9',
  },
  neutral: {
    gray: '#131313',
    black: '#000',
    white: '#fff',
  },
}

module.exports = {
  color: generateColorShades(colors),
}
