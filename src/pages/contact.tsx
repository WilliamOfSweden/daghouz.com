import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { DefaultSectionData } from '../typescript/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/contactPage/masthead'

interface DataProps extends PageProps {
  data: {
    contentfulIndexPageMasthead: DefaultSectionData
  }
}

const ContactPage = ({
  data: { contentfulIndexPageMasthead: mastheadData },
}: DataProps) => (
  <Fragment>
    <SEO title='Contact' />
    <Layout>
      <Masthead mastheadData={mastheadData} />
    </Layout>
  </Fragment>
)

export const query = graphql`
  query ContactPageQuery {
    contentfulIndexPageMasthead {
      title
      content {
        childMdx {
          body
        }
      }
    }
  }
`

export default ContactPage
