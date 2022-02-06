import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as jamstackSection from './eCommerceSection.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from './canvas/'
import TextWrapper from './textWrapper/'

const ECommerceSection = () => {
  const { contentfulIndexPageThirdSection: data } = useStaticQuery(graphql`
    query ECommerceSectionQuery {
      contentfulIndexPageThirdSection {
        title
        body {
          childMdx {
            body
          }
        }
      }
    }
  `)

  return (
    <section className={`${jamstackSection.section} container`}>
      <MobileImage />
      <LazyCanvas />
      <TextWrapper data={data} />
    </section>
  )
}

export default ECommerceSection
