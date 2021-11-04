import React from 'react'

import { DefaultSectionData } from '../../../typescript/'
import FlexSection from '../../common/flexSection/'
import Canvas from './canvas/'

interface Props {
  mastheadData: DefaultSectionData
}

const Masthead = ({ mastheadData }: Props) => (
  <FlexSection sectionContent={mastheadData}>
    <Canvas />
  </FlexSection>
)

export default Masthead
