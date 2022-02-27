import React from 'react'

import { IndexPageMastheadData } from '../../../@types/'
import { useStaticQuery, graphql } from 'gatsby'
import * as mastheadStyles from './masthead.module.css'
import MobileImage from './mobileImage/'
import LazyCanvas from './canvas/'
import TextWrapper from './textWrapper/'

interface GraphQLData {
  contentfulIndexPageMasthead: IndexPageMastheadData
}

const Masthead = () => {
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
      <LazyCanvas />
      <TextWrapper sectionContent={data} />
    </section>
  )
}

export default Masthead
