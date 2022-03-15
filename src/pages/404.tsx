import React, { Fragment } from 'react'

import { SEO } from '../components/shared/'
import { Layout } from '../components/layout/'
import { Masthead } from '../components/404PageComponents/masthead/'

const NotFoundPage = () => (
  <Fragment>
    <SEO title='Page Not Found' />
    <Layout>
      <Masthead />
    </Layout>
  </Fragment>
)

export default NotFoundPage
