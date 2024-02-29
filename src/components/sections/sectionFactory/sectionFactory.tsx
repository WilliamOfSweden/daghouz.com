import React from 'react'

import {
  CtaSection,
  CtaBannerSectionProps,
  HomepageHeroSection,
  HomepageHeroSectionProps,
  HomepageTechSection,
  HomepageTechSectionProps,
  IconAndTextGridSection,
  IconAndTextGridSectionProps,
  PartnersSection,
  PartnersSectionProps,
  WorldMapSection,
  WorldMapSectionProps,
} from '../'

const Blocks = {
  CtaSection: CtaSection,
  HomepageHeroSection: HomepageHeroSection,
  HomepageTechSection: HomepageTechSection,
  IconAndTextGridSection: IconAndTextGridSection,
  WorldMapSection: WorldMapSection,
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
  | WithBlockType<'HomepageTechSection', HomepageTechSectionProps>
  | WithBlockType<'IconAndTextGridSection', IconAndTextGridSectionProps>
  | WithBlockType<'PartnersSection', PartnersSectionProps>
  | WithBlockType<'WorldMapSection', WorldMapSectionProps>

interface Props {
  block: Block
}

export const SectionFactory = ({ block }: Props) => {
  switch (block.blockType) {
    case 'CtaSection':
      return <CtaSection {...block} />
    case 'HomepageHeroSection':
      return <HomepageHeroSection {...block} />
    case 'HomepageTechSection':
      return <HomepageTechSection {...block} />
    case 'IconAndTextGridSection':
      return <IconAndTextGridSection {...block} />
    case 'PartnersSection':
      return <PartnersSection {...block} />
    case 'WorldMapSection':
      return <WorldMapSection {...block} />
    default:
      return null
  }
}
