import React from 'react'

import { SectionData } from '../../../typescript/'
import FlexSection from '../../common/flexSection/'
import Canvas from './canvas/'

interface Props {
  content: SectionData
}

const Masthead = ({ content }: Props) => (
  <FlexSection content={content}>
    <Canvas />
  </FlexSection>
)

export default Masthead
