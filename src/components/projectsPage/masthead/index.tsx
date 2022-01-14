import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { DefaultSectionData } from '../../../@types/'
import FlexSection from '../../shared/flexSection/'

interface Props {
  mastheadData: DefaultSectionData
}

const Masthead = ({ mastheadData }: Props) => (
  <FlexSection sectionContent={mastheadData}>
    <StaticImage
      src='../../../images/projects.svg'
      alt='Isometric web development items and rocket.'
      loading='eager'
      formats={['auto', 'webp', 'avif']}
      placeholder='tracedSVG'
      layout='fullWidth'
    />
  </FlexSection>
)

export default Masthead
