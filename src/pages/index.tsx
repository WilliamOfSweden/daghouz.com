import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { DefaultSectionData } from '../typescript/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import AboutSection from '../components/indexPage/aboutSection/'
import FeaturesSection from '../components/indexPage/featuresSection/'
import StackSection from '../components/indexPage/stackSection/'

interface DataProps extends PageProps {
  data: {
    contentfulIndexPageAboutSection: DefaultSectionData
    contentfulIndexPageMasthead: DefaultSectionData
    contentfulIndexPageFeaturesSection: DefaultSectionData
  }
}

const IndexPage = ({
  data: {
    contentfulIndexPageAboutSection: aboutSectionData,
    contentfulIndexPageMasthead: mastheadData,
    contentfulIndexPageFeaturesSection: featuresSectionData,
  },
}: DataProps) => (
  <Fragment>
    <SEO />
    <Layout>
      <Masthead mastheadData={mastheadData} />
      <AboutSection aboutSectionData={aboutSectionData} />
      <FeaturesSection featuresSectionData={featuresSectionData} />
      <StackSection />
    </Layout>
  </Fragment>
)

export const query = graphql`
  query IndexPageQuery {
    contentfulIndexPageAboutSection {
      title
      content {
        childMdx {
          body
        }
      }
    }
    contentfulIndexPageMasthead {
      title
      content {
        childMdx {
          body
        }
      }
    }
    contentfulIndexPageFeaturesSection {
      title
      content {
        childMdx {
          body
        }
      }
    }
  }
`

export default IndexPage
