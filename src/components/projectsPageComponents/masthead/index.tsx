import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import { FlexSection, LazyCanvas } from '../../shared/'
import MobileImage from './mobileImage/'
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
    <FlexSection reverseFlexDirectionOnDesktop>
      <MobileImage />
      <LazyCanvas>
        <Scene />
      </LazyCanvas>
      <TextWrapper sectionContent={data} />
    </FlexSection>
  )
}
