import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import HeroIllustration from '../../illustrations/heroIllustration'
import FlexSection from '../../common/flexSection/'

const Masthead = () => {
  const {
    graphCmsPageSection: {
      buttonText,
      content: {
        markdownNode: {
          childMdx: { body },
        },
      },
    },
  } = useStaticQuery(graphql`
    query IndexPageMastheadQuery {
      graphCmsPageSection(title: { eq: "Index Page - Masthead" }) {
        buttonText
        content {
          markdownNode {
            childMdx {
              body
            }
          }
        }
      }
    }
  `)

  return (
    <FlexSection content={body}>
      <HeroIllustration />
    </FlexSection>
  )
}

export default Masthead
