import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import * as jamstackSection from './jamstackSection.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from '../../shared/canvas/'
import Scene from './scene/'
import TextWrapper from './textWrapper/'

interface GraphQLData {
  contentfulIndexPageJamstackSection: DefaultSectionData
}

export const JamstackSection = () => {
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
        <LazyCanvas>
          <Scene />
        </LazyCanvas>
        <TextWrapper data={data} />
      </div>
    </section>
  )
}
