import './index.css';
import '../src/fonts.css';
import '../src/fonts-haas.css';
import '../src/tokens/theme-base.css';
import '../src/tokens/theme-bw.css';
import '../src/tokens/semantic.css';
import '../src/tokens/responsive.css';
import '../src/tokens/fixed.css';
/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'Brand theme',
      defaultValue: 'base',
      toolbar: {
        title: 'Theme',
        icon: 'globe',
        items: [
          { value: 'base', title: 'Base' },
          { value: 'bw', title: 'B/W' },
        ],
        dynamicTitle: true,
      },
    },
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
    const theme = context.globals.theme || 'base';
    const mode = context.globals.mode || 'light-white';
    document.documentElement.setAttribute('data-theme', theme);
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