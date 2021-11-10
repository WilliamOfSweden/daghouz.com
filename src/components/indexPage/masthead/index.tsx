import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { DefaultSectionData } from '../../../typescript/'
import FlexSection from './flexSection/'

interface MastheadData extends DefaultSectionData {
  coloredTitle: string
}

interface Props {
  mastheadData: MastheadData
}

const Masthead = ({ mastheadData }: Props) => (
  <FlexSection sectionContent={mastheadData}>
    <StaticImage
      src='../../../images/rocket.svg'
      alt='Isometric web development items and rocket.'
      loading='eager'
      formats={['auto', 'webp', 'avif']}
      placeholder='tracedSVG'
      layout='fullWidth'
    />
  </FlexSection>
)

export default Masthead
