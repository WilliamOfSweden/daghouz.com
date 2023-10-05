import { CreateWebpackConfigArgs } from 'gatsby'
import path from 'path'

export const createWebpackConfig =
  (basePath: string) =>
  ({ actions }: CreateWebpackConfigArgs) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@components': path.resolve(basePath, 'src/components'),
          '@pages': path.resolve(basePath, 'src/pages'),
        },
      },
    })
  }
