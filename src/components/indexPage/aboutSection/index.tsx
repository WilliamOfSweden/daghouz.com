import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript/'
import { StyledAboutSection, StyledH2 } from '../../layout/styledComponents/'

interface Props {
  aboutSectionData: DefaultSectionData
}

const AboutSection = ({ aboutSectionData }: Props) => (
  <StyledAboutSection className='container'>
    <div>
      <StaticImage
        src='../../../images/space.png'
        alt='Building'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </div>
    <div>
      <StyledH2 small>{aboutSectionData.title}</StyledH2>
      <MDXRenderer>{aboutSectionData.content.childMdx.body}</MDXRenderer>
    </div>
  </StyledAboutSection>
)

export default AboutSection
