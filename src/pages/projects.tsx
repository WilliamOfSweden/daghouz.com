import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { ProjectData, DefaultSectionData } from '../@types/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/projectsPage/masthead/'
import ProjectsSection from '../components/projectsPage/projectsSection/'

interface DataProps extends PageProps {
  data: {
    contentfulProjectsPageMasthead: DefaultSectionData
    allContentfulProject: {
      edges: {
        node: ProjectData
      }[]
    }
  }
}

const ProjectsPage = ({
  data: {
    contentfulProjectsPageMasthead: mastheadData,
    allContentfulProject: { edges: projects },
  },
}: DataProps) => (
  <Fragment>
    <SEO title='Projects' />
    <Layout>
      <Masthead mastheadData={mastheadData} />
      <ProjectsSection projects={projects} />
    </Layout>
  </Fragment>
)

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          image {
            gatsbyImageData
            description
          }
          link
          title
          content {
            childMdx {
              body
            }
          }
        }
      }
    }
    contentfulProjectsPageMasthead {
      content {
        childMdx {
          body
        }
      }
      title
    }
  }
`

export default ProjectsPage
