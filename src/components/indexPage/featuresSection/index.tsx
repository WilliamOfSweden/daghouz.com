import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { SectionData } from '../../../typescript/'
import { MdxGrid } from '../../layout/mdxComponents/'

interface Props {
  content: SectionData
}

const FeaturesSection = ({ content }: Props) => (
  <section className='container'>
    <MDXProvider components={{ ul: MdxGrid }}>
      <MDXRenderer>{content.markdownNode.childMdx.body}</MDXRenderer>
    </MDXProvider>
  </section>
)

export default FeaturesSection
