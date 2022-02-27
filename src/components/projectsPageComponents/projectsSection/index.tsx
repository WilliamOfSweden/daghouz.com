import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ProjectData } from '../../../@types/'
import ProjectItem from './projectItem/'

interface GraphQLData {
  allContentfulProject: {
    edges: {
      node: ProjectData
    }[]
  }
}

export const ProjectsSection = () => {
  const { allContentfulProject: data } = useStaticQuery<GraphQLData>(graphql`
    query ProjectsPageProjectsSectionQuery {
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
    }
  `)

  return (
    <section className='container'>
      {data.edges.map(project => (
        <ProjectItem key={project.node.id} node={project.node} />
      ))}
    </section>
  )
}
