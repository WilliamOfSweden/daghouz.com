import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import { TextWrapper } from './textWrapper/'

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
    <section className='container'>
      <TextWrapper sectionContent={data} />
    </section>
  )
}
