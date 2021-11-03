import React from 'react'

import { SectionData } from '../../../typescript/'
import FlexSection from '../../common/flexSection/'
import Illustration404 from '../../illustrations/illustration404'

interface Props {
  content: SectionData
}

const Masthead = ({ content }: Props) => (
  <FlexSection notFound content={content}>
    <Illustration404 />
  </FlexSection>
)

export default Masthead
