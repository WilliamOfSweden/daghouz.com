import { StoryObj } from '@storybook/react'

import { Button } from './'
import styles from './button.module.css'

const meta = {
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
