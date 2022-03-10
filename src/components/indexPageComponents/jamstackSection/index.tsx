import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import { FlexSection } from '../../shared/'
import * as jamstackSection from './jamstackSection.module.css'
import MobileImage from './mobileImage/'
import { LazyCanvas } from '../../shared/'
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
    <div className={jamstackSection.bg}>
      <FlexSection>
        <MobileImage />
        <LazyCanvas>
          <Scene />
        </LazyCanvas>
        <TextWrapper data={data} />
      </FlexSection>
    </div>
  )
}
