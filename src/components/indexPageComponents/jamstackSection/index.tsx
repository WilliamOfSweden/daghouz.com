import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import * as jamstackSection from './jamstackSection.module.css'
import TextWrapper from './textWrapper/'
import MobileImage from './mobileImage/'
import LazyCanvas from './canvas/'

const JamstackSection = () => {
  const { contentfulIndexPageJamstackSection: data } = useStaticQuery(graphql`
    query IndexPageJamstacSectionQuery {
      contentfulIndexPageJamstackSection {
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
      <LazyCanvas />
      <MobileImage />
      <TextWrapper data={data} />
    </section>
  )
}

export default JamstackSection
