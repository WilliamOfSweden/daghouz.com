import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../@types/'
import { useStaticQuery, graphql } from 'gatsby'
import * as featuresSectionStyles from './featuresSection.module.css'

interface GraphQLData {
  contentfulIndexPageFeaturesSection: DefaultSectionData
}

const FeaturesSection = () => {
  const { contentfulIndexPageFeaturesSection: data } =
    useStaticQuery<GraphQLData>(graphql`
      query IndexPageFeaturesSectionQuery {
        contentfulIndexPageFeaturesSection {
          title
          content {
            childMdx {
              body
            }
          }
        }
      }
    `)

  return (
    <section className={featuresSectionStyles.featuresSection}>
      <div className='container'>
        <h2 className={featuresSectionStyles.title}>{data.title}</h2>
        <MDXRenderer>{data.content.childMdx.body}</MDXRenderer>
      </div>
    </section>
  )
}

export default FeaturesSection
