import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'

import { ProjectData, SectionData } from '../typescript/'
import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/projectsPage/masthead/'
import ProjectsSection from '../components/projectsPage/projectsSection/'

interface DataProps extends PageProps {
  data: {
    graphCmsPageSection: {
      content: SectionData
    }
    allGraphCmsProject: {
      edges: {
        node: ProjectData
      }[]
    }
  }
}

const ProjectsPage = ({
  data: {
    graphCmsPageSection: { content },
    allGraphCmsProject: { edges: projects },
  },
}: DataProps) => (
  <Fragment>
    <SEO title='Projects' />
    <Layout>
      <Masthead content={content} />
      <ProjectsSection projects={projects} />
    </Layout>
  </Fragment>
)

export const query = graphql`
  query ProjectsPageQuery {
    graphCmsPageSection(title: { eq: "Projects Page - Masthead" }) {
      content {
        markdownNode {
          childMdx {
            body
          }
        }
      }
    }
    allGraphCmsProject {
      edges {
        node {
          clientName
          imageAlt
          description {
            markdownNode {
              childMdx {
                body
              }
            }
          }
          image {
            gatsbyImageData
          }
          projectLink
        }
      }
    }
  }
`

export default ProjectsPage
