import React from 'react'

import { DefaultSectionData } from '../../../typescript/'
import FlexSection from '../../common/flexSection/'
import Illustration404 from '../../illustrations/illustration404'

interface Props {
  mastheadData: DefaultSectionData
}

const Masthead = ({ mastheadData }: Props) => (
  <FlexSection notFound sectionContent={mastheadData}>
    <Illustration404 />
  </FlexSection>
)

export default Masthead
