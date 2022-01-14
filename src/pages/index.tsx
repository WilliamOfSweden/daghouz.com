import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { DefaultSectionData } from '../@types/'
import SEO from '../components/shared/seo'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import ServicesSection from '../components/indexPage/servicesSection/'
import ECommerceSection from '../components/indexPage/eCommerceSection'
import FeaturesSection from '../components/indexPage/featuresSection/'
import AboutSection from '../components/indexPage/aboutSection/'

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
    contentfulIndexPageMasthead: mastheadData,
    contentfulIndexPageFeaturesSection: featuresSectionData,
  },
}: DataProps) => (
  <Fragment>
    <SEO />
    <Layout>
      <Masthead mastheadData={mastheadData} />
      <ServicesSection />
      <ECommerceSection />
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
    contentfulIndexPageMasthead {
      coloredTitle
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
