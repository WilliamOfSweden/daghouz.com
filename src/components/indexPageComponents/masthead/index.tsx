import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { IndexPageMastheadData } from '../../../@types/'
import * as mastheadStyles from './masthead.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from '../../shared/canvas/'
import Scene from './scene/'
import TextWrapper from './textWrapper/'

interface GraphQLData {
  contentfulIndexPageMasthead: IndexPageMastheadData
}

export const Masthead = () => {
  const { contentfulIndexPageMasthead: data } =
    useStaticQuery<GraphQLData>(graphql`
      query IndexPageMastheadQuery {
        contentfulIndexPageMasthead {
          title
          coloredTitle
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
      <LazyCanvas>
        <Scene />
      </LazyCanvas>
      <TextWrapper sectionContent={data} />
    </section>
  )
}
