import React, { Fragment } from 'react'

import { SEO } from '../components/shared/'
import { Layout } from '../components/layout/'
import { Masthead } from '../components/contactPageComponents/masthead/'

const Contact = () => (
  <Fragment>
    <SEO title='Contact' />
    <Layout>
      <Masthead />
    </Layout>
  </Fragment>
)

export default Contact
