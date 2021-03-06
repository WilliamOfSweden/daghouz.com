import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import { FlexSection } from '../../shared/'
import { MobileImage } from './mobileImage/'
import { Scene } from './scene/'
import { TextWrapper } from './textWrapper/'

interface IndexPageMastheadData extends DefaultSectionData {
  coloredTitle: string
}
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
    <FlexSection
      content={<TextWrapper sectionContent={data} />}
      mobileImage={<MobileImage />}
      reverseFlexDirectionOnDesktop
      scene={<Scene />}
    />
  )
}
