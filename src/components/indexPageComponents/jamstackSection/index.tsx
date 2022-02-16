import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import * as jamstackSection from './jamstackSection.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from './canvas/'
import TextWrapper from './textWrapper/'

const JamstackSection = () => {
  const { contentfulIndexPageJamstackSection: data } = useStaticQuery(graphql`
    query IndexPageJamstackSectionQuery {
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
    <section className={jamstackSection.section}>
      <div className={`${jamstackSection.wrapper} container`}>
        <MobileImage />
        <LazyCanvas />
        <TextWrapper data={data} />
      </div>
    </section>
  )
}

export default JamstackSection
