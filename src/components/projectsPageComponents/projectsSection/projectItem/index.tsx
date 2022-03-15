import React from 'react'

import { ProjectData } from '../../../../@types/'
import * as projectItemStyles from './projectItem.module.css'
import { ProjectImage } from './projectImage'
import { ProjectInfo } from './projectInfo/'

interface Props {
  node: ProjectData
}

export const ProjectItem = ({
  node: {
    content: {
      childMdx: { body },
    },
    image,
    link,
    title,
  },
}: Props) => (
  <div className={projectItemStyles.wrapper}>
    <ProjectImage image={image} projectLink={link} />
    <ProjectInfo body={body} clientName={title} projectLink={link} />
  </div>
)
