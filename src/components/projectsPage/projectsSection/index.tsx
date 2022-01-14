import React from 'react'

import ProjectItem from './projectItem/'
import { ProjectData } from '../../../@types/'

interface Props {
  projects: {
    node: ProjectData
  }[]
}

const ProjectsSection = ({ projects }: Props) => (
  <section className='container'>
    {projects.map(project => (
      <ProjectItem key={project.node.id} node={project.node} />
    ))}
  </section>
)

export default ProjectsSection
