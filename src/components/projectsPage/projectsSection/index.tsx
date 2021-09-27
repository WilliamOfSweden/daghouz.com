import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import ProjectItem from './projectItem'

interface DataProps {
  allGraphCmsProject: {
    edges: {
      node: {
        clientName: string
        imageAlt: string
        description: {
          markdownNode: {
            childMdx: {
              body: string
            }
          }
        }
        image: {
          gatsbyImageData: IGatsbyImageData
        }
        projectLink: string
      }
    }[]
  }
}

const ProjectsSection: FC = () => {
  const {
    allGraphCmsProject: { edges },
  } = useStaticQuery<DataProps>(graphql`
    query ProjectsPageProjectsSectionQuery {
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
  `)

  return (
    <Container component='section'>
      {edges.map(project => (
        <ProjectItem key={project.node.clientName} node={project.node} />
      ))}
    </Container>
  )
}

export default ProjectsSection
