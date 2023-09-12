import { Meta, StoryObj } from '@storybook/react'

import { Button } from './index'
import styles from './button.module.css'

const meta: Meta = {
  component: Button,
  parameters: {
    controls: {
      exclude: ['className'],
    },
  },
  title: 'Atoms/Button',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttonText: 'Contact Me',
    className: styles.btn,
    disabled: false,
  },
}
