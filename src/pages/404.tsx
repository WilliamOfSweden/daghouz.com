import React, { Fragment } from 'react'
// import { graphql, PageProps } from 'gatsby'

// import { SectionData } from '../typescript/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
// import Masthead from '../components/404Page/masthead/'

// interface DataProps extends PageProps {
//   data: {
//     graphCmsPageSection: {
//       content: SectionData
//     }
//   }
// }

const NotFoundPage = () => (
  //   {
  //   data: {
  //     graphCmsPageSection: { content },
  //   },
  // }: DataProps
  <Fragment>
    <SEO title='Page Not Found' />
    <Layout>{/* <Masthead content={content} /> */}</Layout>
  </Fragment>
)

// export const query = graphql`
//   query NotFoundPageQuery {
//     graphCmsPageSection(title: { eq: "Not Found Page - Masthead" }) {
//       content {
//         markdownNode {
//           childMdx {
//             body
//           }
//         }
//       }
//     }
//   }
// `

export default NotFoundPage
