import React from 'react'

import ProjectItem from './projectItem/'
import { ProjectData } from '../../../typescript/'

interface Props {
  projects: {
    node: ProjectData
  }[]
}

const ProjectsSection = ({ projects }: Props) => (
  <section className='container'>
    {projects.map(project => (
      <ProjectItem key={project.node.clientName} node={project.node} />
    ))}
  </section>
)

export default ProjectsSection
