import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript/'
import * as featuresSectionStyles from './featuresSection.module.css'
import { MdxGrid } from '../../layout/mdxComponents/'

interface Props {
  featuresSectionData: DefaultSectionData
}

const FeaturesSection = ({ featuresSectionData }: Props) => (
  <section
    style={{
      background: '#f1f4f8',
      marginBottom: 0,
      paddingBottom: '60px',
      paddingTop: '60px',
    }}
  >
    <div className='container'>
      <h2 className={featuresSectionStyles.title}>
        {featuresSectionData.title}
      </h2>
      <MDXProvider components={{ ul: MdxGrid }}>
        <MDXRenderer>{featuresSectionData.content.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </section>
)

export default FeaturesSection
