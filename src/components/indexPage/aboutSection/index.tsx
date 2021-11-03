import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { SectionData } from '../../../typescript/'
import { StyledAboutSection } from '../../layout/styledComponents/'
import { MdxH2Small } from '../../layout/mdxComponents/'

interface Props {
  content: SectionData
}

const AboutSection = ({ content }: Props) => (
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
      <MDXProvider components={{ h2: MdxH2Small }}>
        <MDXRenderer>{content.markdownNode.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </StyledAboutSection>
)

export default AboutSection
