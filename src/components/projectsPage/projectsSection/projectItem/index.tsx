import React from 'react'

import { ProjectData } from '../../../../typescript/'
import * as projectItemStyles from './projectItem.module.css'
import ProjectInfo from './projectInfo/'
import ProjectImage from './projectImage'

interface DataProps {
  node: ProjectData
}

const ProjectItem = ({
  node: {
    content: {
      childMdx: { body },
    },
    image,
    link,
    title,
  },
}: DataProps) => (
  <div className={projectItemStyles.wrapper}>
    <ProjectImage image={image} projectLink={link} />
    <ProjectInfo body={body} clientName={title} projectLink={link} />
  </div>
)

export default ProjectItem
