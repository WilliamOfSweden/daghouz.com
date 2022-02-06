import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import * as mastheadStyles from './masthead.module.css'
import MobileImage from './mobileImage'
import LazyCanvas from './canvas/'
import TextWrapper from './textWrapper/'

const Masthead = () => {
  const { contentfulIndexPageMasthead: data } = useStaticQuery(graphql`
    query IndexPageMastheadQuery {
      contentfulIndexPageMasthead {
        id
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
