/** @type { import('@storybook/server').Preview } */
const preview = {
  parameters: {
    server: {
      url: "https://drupal-sdc.ddev.site",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
