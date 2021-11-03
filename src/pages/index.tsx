import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import { PageData } from '../typescript/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import AboutSection from '../components/indexPage/aboutSection/'
import FeaturesSection from '../components/indexPage/featuresSection/'
import StackSection from '../components/indexPage/stackSection/'

const IndexPage = ({
  data: {
    allGraphCmsPageSection: { edges },
  },
}: PageData) => {
  const mastheadContent = edges.find(
    section => section.node.title === 'Index Page - Masthead'
  )

  const aboutSectionContent = edges.find(
    section => section.node.title === 'Index Page - About-section'
  )

  const featuresSectionContent = edges.find(
    section => section.node.title === 'Index Page - Features-section'
  )

  return (
    <Fragment>
      <SEO />
      <Layout>
        <Masthead content={mastheadContent!.node.content} />
        <AboutSection content={aboutSectionContent!.node.content} />
        <FeaturesSection content={featuresSectionContent!.node.content} />
        <StackSection />
      </Layout>
    </Fragment>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allGraphCmsPageSection(filter: { title: { regex: "/Index Page/" } }) {
      edges {
        node {
          title
          content {
            markdownNode {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
