import React from 'react'

import { HomepageHeroSection, HomepageHeroSectionProps } from '../index'

const Blocks = {
  HomepageHeroSection: HomepageHeroSection,
} as const

type BlockTypes = keyof typeof Blocks

type SectionProps = (typeof Blocks)[keyof typeof Blocks]

type WithBlockType<B = BlockTypes, P = SectionProps> = {
  blockType: B
  id: string
} & P

export type Block = WithBlockType<
  'HomepageHeroSection',
  HomepageHeroSectionProps
>

interface Props {
  block: Block
}

export const SectionFactory = ({ block }: Props) => {
  switch (block.blockType) {
    case 'HomepageHeroSection':
      return <HomepageHeroSection {...block} />
    default:
      return null
  }
}