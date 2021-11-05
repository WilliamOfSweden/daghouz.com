import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript/'
import { StyledAboutSection, StyledH2 } from '../../layout/styledComponents/'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {
  aboutSectionData: DefaultSectionData
}

const AboutSection = ({ aboutSectionData }: Props) => (
  <StyledAboutSection className='container'>
    <div>
      <div>
        <StaticImage
          src='../../../images/about.png'
          alt='Building'
          loading='eager'
          formats={['auto', 'webp', 'avif']}
          placeholder='none'
          layout='fullWidth'
        />
      </div>
      <div>
        <StyledH2 small>About Me</StyledH2>
        <MDXRenderer>{aboutSectionData.content.childMdx.body}</MDXRenderer>
      </div>
    </div>
  </StyledAboutSection>
)

export default AboutSection
