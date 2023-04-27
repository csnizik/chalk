/** @type { import('@storybook/server').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    server: {
      url: 'https://barksandbytes.ddev.site',
    },
    drupalTheme: 'chalk',
    supportedDrupalThemes: {
      chalk: { title: 'Chalk' },
      claro: { title: 'Claro' },
      olivero: { title: 'Olivero' },
    },
  },
}

export default preview
