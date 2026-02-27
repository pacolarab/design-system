import './index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    mode: {
      description: 'Color mode',
      defaultValue: 'light-white',
      toolbar: {
        title: 'Mode',
        icon: 'paintbrush',
        items: [
          { value: 'light-white', title: 'Light White' },
          { value: 'light-grey', title: 'Light Grey' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.mode || 'light-white';
      document.documentElement.setAttribute('data-mode', mode);
      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;