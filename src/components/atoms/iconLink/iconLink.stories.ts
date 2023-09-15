import { StoryObj } from '@storybook/react'

import { IconLink } from './'
import styles from './iconLink.module.css'

const meta = {
  component: IconLink,
  parameters: {
    controls: {
      exclude: ['className', 'svgContent'],
    },
  },
  title: 'Atoms/Icon-link',
}

export default meta

type Story = StoryObj<typeof meta> & { args: { className?: string } }

export const GithHubIconLink: Story = {
  args: {
    className: styles.a,
    href: 'https://github.com/williamofsweden/',
    svgContent: `<svg viewBox="0 0 2.33 2.33"><path d="M1.16.19a.97.97 0 1 1 0 1.94.97.97 0 0 1 0-1.94Zm0-.19a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32Zm0 .58a.58.58 0 0 0-.18 1.13c.03 0 .04-.01.04-.03v-.11c-.16.04-.2-.07-.2-.07-.03-.07-.06-.09-.06-.09-.05-.04 0-.04 0-.04.06 0 .09.06.09.06.05.09.14.06.17.05 0-.04.02-.06.04-.08-.13-.01-.27-.06-.27-.29 0-.06.02-.12.06-.16C.85.94.82.88.85.8c0 0 .05-.02.16.06l.15-.02c.05 0 .1 0 .15.02.11-.08.16-.06.16-.06.03.08.01.14 0 .15.04.04.06.09.06.16 0 .22-.14.27-.27.29.02.02.04.05.04.11v.16s0 .03.04.03a.6.6 0 0 0 .4-.55.58.58 0 0 0-.58-.58Z"></path></svg>`,
  },
}

GithHubIconLink.storyName = 'GitHub Icon-link'

export const LenkedInIconLink: Story = {
  args: {
    className: styles.a,
    href: 'https://github.com/williamofsweden/',
    svgContent: `<svg fill="currentColor" viewBox="0 0 2.33 2.33"><path d="M1.16.19a.97.97 0 1 1 0 1.94.97.97 0 0 1 0-1.94Zm0-.19a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32ZM.97.78c0 .05-.04.1-.1.1S.77.84.77.78s.04-.1.1-.1.1.04.1.1Zm0 .19H.78v.58h.19V.97Zm.29 0h-.19v.58h.19v-.28c0-.17.19-.18.19 0v.28h.19v-.33c0-.32-.3-.31-.39-.15V.96Z"></path></svg>`,
  },
}

LenkedInIconLink.storyName = 'LinkedIn Icon-link'
