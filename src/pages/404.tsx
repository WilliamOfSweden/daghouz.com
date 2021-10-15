import React, { Fragment } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/'
import Masthead from '../components/404Page/masthead/'

const NotFoundPage = () => {
  return (
    <Fragment>
      <SEO title='Page Not Found' />
      <Layout>
        <Masthead />
      </Layout>
    </Fragment>
  )
}

export default NotFoundPage
