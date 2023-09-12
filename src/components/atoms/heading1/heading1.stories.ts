import { Meta, StoryObj } from '@storybook/react'

import { Heading1 } from './'
import styles from './heading1.module.css'

const meta: Meta = {
  component: Heading1,
  parameters: {
    controls: {
      exclude: ['className'],
    },
  },
  title: 'Atoms/Heading 1',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headingText: 'Web Developer',
    className: styles.heading1,
  },
}
