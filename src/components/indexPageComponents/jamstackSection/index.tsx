import React from 'react'

import { DefaultSectionData } from '../../../@types/'
import { useStaticQuery, graphql } from 'gatsby'
import * as jamstackSection from './jamstackSection.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from './canvas/'
import TextWrapper from './textWrapper/'

interface GraphQLData {
  contentfulIndexPageJamstackSection: DefaultSectionData
}

const JamstackSection = () => {
  const { contentfulIndexPageJamstackSection: data } =
    useStaticQuery<GraphQLData>(graphql`
      query IndexPageJamstackSectionQuery {
        contentfulIndexPageJamstackSection {
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
