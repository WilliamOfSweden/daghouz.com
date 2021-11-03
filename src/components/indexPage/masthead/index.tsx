import React from 'react'

import { SectionData } from '../../../typescript/'
import HeroIllustration from '../../illustrations/heroIllustration'
import FlexSection from '../../common/flexSection/'

interface Props {
  content: SectionData
}

const Masthead = ({ content }: Props) => (
  <FlexSection content={content}>
    <HeroIllustration />
  </FlexSection>
)

export default Masthead
