import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { DefaultSectionData } from '../@types/'
import SEO from '../components/shared/seo'
import Layout from '../components/layout/'
import {
  AboutSection,
  // ECommerceSection,
  FeaturesSection,
  JamstackSection,
  Masthead,
} from '../components/indexPageComponents/'

interface MastheadData extends DefaultSectionData {
  coloredTitle: string
}

interface DataProps extends PageProps {
  data: {
    contentfulIndexPageAboutSection: DefaultSectionData
    contentfulIndexPageMasthead: MastheadData
    contentfulIndexPageFeaturesSection: DefaultSectionData
  }
}

const IndexPage = ({
  data: {
    contentfulIndexPageAboutSection: aboutSectionData,
    contentfulIndexPageFeaturesSection: featuresSectionData,
  },
}: DataProps) => (
  <Fragment>
    <SEO />
    <Layout>
      <Masthead />
      <JamstackSection />
      {/* <ECommerceSection /> */}
      <FeaturesSection featuresSectionData={featuresSectionData} />
      <AboutSection aboutSectionData={aboutSectionData} />
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
