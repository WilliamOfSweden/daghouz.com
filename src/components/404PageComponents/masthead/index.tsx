import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import * as mastheadStyles from './masthead.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from './canvas/'
import TextWrapper from './textWrapper/'

interface GraphQLData {
  contentfulNotFoundPageMasthead: DefaultSectionData
}

export const Masthead = () => {
  const { contentfulNotFoundPageMasthead: data } =
    useStaticQuery<GraphQLData>(graphql`
      query NotFoundPageMastheadQuery {
        contentfulNotFoundPageMasthead {
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
    <section className={`${mastheadStyles.masthead} container`}>
      <MobileImage />
      <LazyCanvas />
      <TextWrapper sectionContent={data} />
    </section>
  )
}
