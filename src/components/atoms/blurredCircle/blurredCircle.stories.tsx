import { StoryObj } from '@storybook/react'

import { BlurredCircle } from './'
import styles from './blurredCircle.module.css'

const meta = {
  component: BlurredCircle,
  parameters: {
    controls: {
      exclude: ['className', 'width'],
    },
  },
  title: 'Atoms/Blurred Circle',
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    className: styles.svg,
    width: 413,
  },
}
