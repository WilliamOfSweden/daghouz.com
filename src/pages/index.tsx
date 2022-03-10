import React, { Fragment } from 'react'

import { SEO } from '../components/shared/'
import Layout from '../components/layout/'
import {
  FeaturesSection,
  JamstackSection,
  Masthead,
} from '../components/indexPageComponents/'

const IndexPage = () => (
  <Fragment>
    <SEO />
    <Layout>
      <Masthead />
      <JamstackSection />
      <FeaturesSection />
    </Layout>
  </Fragment>
)

export default IndexPage
