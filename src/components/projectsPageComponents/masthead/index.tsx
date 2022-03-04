import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import * as mastheadStyles from './masthead.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from '../../shared/canvas/'
import Scene from './scene/'
import TextWrapper from './textWrapper/'

interface GraphQLData {
  contentfulProjectsPageMasthead: DefaultSectionData
}

export const Masthead = () => {
  const { contentfulProjectsPageMasthead: data } =
    useStaticQuery<GraphQLData>(graphql`
      query ProjectsPageMastheadQuery {
        contentfulProjectsPageMasthead {
          content {
            childMdx {
              body
            }
          }
          title
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
