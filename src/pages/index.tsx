import React, { Fragment } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import AboutSection from '../components/indexPage/aboutSection/'
import FeaturesSection from '../components/indexPage/featuresSection/'
import StackSection from '../components/indexPage/stackSection/'

const IndexPage = () => {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <Masthead />
        <AboutSection />
        <FeaturesSection />
        <StackSection />
      </Layout>
    </Fragment>
  )
}

export default IndexPage
