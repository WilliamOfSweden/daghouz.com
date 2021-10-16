import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box'

import FlexSection from '../../common/flexSection/'
import MyCanvas from './canvas'

const Masthead = () => {
  const {
    graphCmsPageSection: {
      content: {
        markdownNode: {
          childMdx: { body },
        },
      },
    },
  } = useStaticQuery(graphql`
    query ProjectsPageMastheadQuery {
      graphCmsPageSection(title: { eq: "Projects Page - Masthead" }) {
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
      <Box position='relative' paddingTop='97.375%'>
        <MyCanvas />
      </Box>
    </FlexSection>
  )
}

export default Masthead
