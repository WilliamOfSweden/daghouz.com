import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../@types/'
import * as featuresSectionStyles from './featuresSection.module.css'

interface Props {
  featuresSectionData: DefaultSectionData
}

const FeaturesSection = ({ featuresSectionData }: Props) => (
  <section className={featuresSectionStyles.featuresSection}>
    <div className='container'>
      <h2 className={featuresSectionStyles.title}>
        {featuresSectionData.title}
      </h2>
      <MDXRenderer>{featuresSectionData.content.childMdx.body}</MDXRenderer>
    </div>
  </section>
)

export default FeaturesSection
