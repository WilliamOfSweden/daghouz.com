import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typings/'
import * as featuresSectionStyles from './featuresSection.module.css'
import { MdxGrid } from '../../layout/mdxComponents/'

interface Props {
  featuresSectionData: DefaultSectionData
}

const FeaturesSection = ({ featuresSectionData }: Props) => (
  <section  className={featuresSectionStyles.featuresSection}>
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
