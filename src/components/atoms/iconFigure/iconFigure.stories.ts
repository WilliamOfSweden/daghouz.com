import { Meta, StoryObj } from '@storybook/react'

import { IconFigure } from './index'
import styles from './iconFigure.module.css'

const meta: Meta = {
  component: IconFigure,
  parameters: {
    controls: {
      exclude: ['className', 'svgContent'],
    },
  },
  title: 'Atoms/Icon Figure',
}

export default meta

type Story = StoryObj<typeof meta>

export const SVGFilledCircle: Story = {
  args: {
    className: styles.figure,
    svgContent: {
      innerHTML: `<svg fill='currentColor' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' /></svg>`,
    },
  },
}

export const SVGFilledRect: Story = {
  args: {
    className: styles.figure,
    svgContent: {
      innerHTML: `<svg fill='currentColor' viewBox='0 0 150 100'><rect height='100' rx='13' width='150' /></svg>`,
    },
  },
}

export const SVGOpenSquare: Story = {
  args: {
    className: styles.figure,
    svgContent: {
      innerHTML: `<svg fill='currentColor' viewBox='0 0 15 15'><path clip-rule='evenodd' d='M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z'  fill-rule='evenodd'></path></svg>`,
    },
  },
}
