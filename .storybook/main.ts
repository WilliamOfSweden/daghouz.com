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
  staticDirs: ['../static'],
  stories: ['../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async config => {
    config.module?.rules?.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            configFile: './.storybook/.storybook.babelrc.json',
          },
        },
      ],
    })
    return config
  },
}

export default storybookConfig
