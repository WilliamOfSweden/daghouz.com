import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import ProjectItem from './projectItem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(15),
    },
  })
)

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

const ProjectsSection = () => {
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

  const classes = useStyles()

  return (
    <Container className={classes.container} component='section'>
      {edges.map(project => (
        <ProjectItem key={project.node.clientName} node={project.node} />
      ))}
    </Container>
  )
}

export default ProjectsSection
