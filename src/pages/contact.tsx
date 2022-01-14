import React, { Fragment } from 'react'

import SEO from '../components/shared/seo'
import Layout from '../components/layout/'
import Masthead from '../components/contactPage/masthead/'

const ContactPage = () => (
  <Fragment>
    <SEO title='Contact' />
    <Layout>
      <Masthead />
    </Layout>
  </Fragment>
)

export default ContactPage
