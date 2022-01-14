import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { DefaultSectionData } from '../@types/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/404Page/masthead'

interface DataProps extends PageProps {
  data: {
    contentfulNotFoundPageMasthead: DefaultSectionData
  }
}

const NotFoundPage = ({
  data: { contentfulNotFoundPageMasthead: mastheadData },
}: DataProps) => (
  <Fragment>
    <SEO title='Page Not Found' />
    <Layout>
      <Masthead mastheadData={mastheadData} />
    </Layout>
  </Fragment>
)

export const query = graphql`
  query NotFoundPageQuery {
    contentfulNotFoundPageMasthead {
      title
      content {
        childMdx {
          body
        }
      }
    }
  }
`

export default NotFoundPage
