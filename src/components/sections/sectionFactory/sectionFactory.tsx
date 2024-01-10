import React from 'react'

import {
  CtaSection,
  CtaBannerSectionProps,
  HomepageHeroSection,
  HomepageHeroSectionProps,
  IconAndTextGridSection,
  IconAndTextGridSectionProps,
} from '../'

const Blocks = {
  CtaSection: CtaSection,
  HomepageHeroSection: HomepageHeroSection,
  IconAndTextGridSection: IconAndTextGridSection,
} as const

type BlockTypes = keyof typeof Blocks

type SectionProps = (typeof Blocks)[keyof typeof Blocks]

type WithBlockType<B = BlockTypes, P = SectionProps> = {
  blockType: B
  id: string
} & P

export type Block =
  | WithBlockType<'CtaSection', CtaBannerSectionProps>
  | WithBlockType<'HomepageHeroSection', HomepageHeroSectionProps>
  | WithBlockType<'IconAndTextGridSection', IconAndTextGridSectionProps>

interface Props {
  block: Block
}

export const SectionFactory = ({ block }: Props) => {
  switch (block.blockType) {
    case 'HomepageHeroSection':
      return <HomepageHeroSection {...block} />
    case 'IconAndTextGridSection':
      return <IconAndTextGridSection {...block} />
    case 'CtaSection':
      return <CtaSection {...block} />
    default:
      return null
  }
}
