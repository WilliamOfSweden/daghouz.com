import { StorybookConfig } from '@storybook/react-webpack5'

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
}

export default storybookConfig
