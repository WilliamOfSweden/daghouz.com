import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript/'
import { MdxGrid } from '../../layout/mdxComponents/'
import { StyledH2 } from '../../layout/styledComponents'

interface Props {
  featuresSectionData: DefaultSectionData
}

const FeaturesSection = ({ featuresSectionData }: Props) => (
  <section className='container'>
    <StyledH2>{featuresSectionData.title}</StyledH2>
    <MDXProvider components={{ ul: MdxGrid }}>
      <MDXRenderer>{featuresSectionData.content.childMdx.body}</MDXRenderer>
    </MDXProvider>
  </section>
)

export default FeaturesSection
