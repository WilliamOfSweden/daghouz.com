import React from 'react'

import { DefaultSectionData } from '../../../typescript/'
import HeroIllustration from '../../illustrations/heroIllustration'
import FlexSection from '../../common/flexSection/'

interface Props {
  mastheadData: DefaultSectionData
}

const Masthead = ({ mastheadData }: Props) => (
  <FlexSection sectionContent={mastheadData}>
    <HeroIllustration />
  </FlexSection>
)

export default Masthead
