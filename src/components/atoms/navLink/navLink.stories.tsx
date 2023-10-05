import { StoryObj } from '@storybook/react'

import { NavLink } from './'
import styles from './navLink.module.css'

const meta = {
  component: NavLink,
  parameters: {
    controls: {
      exclude: ['activeClassName', 'className', 'to'],
    },
  },
  title: 'Atoms/Nav-link',
}

export default meta

type Story = StoryObj<typeof meta> & { args: { className?: string } }

export const AnotherPage: Story = {
  args: {
    className: styles.link,
    name: `Not active`,
    to: '/',
  },
}

export const CurrentPage: Story = {
  args: {
    className: `${styles.link} ${styles.linkActive}`,
    name: `Active`,
    to: '/',
  },
}
