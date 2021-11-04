import React from 'react'

import { ProjectData } from '../../../../typescript/'
import ProjectInfo from './projectInfo/'
import { StyledProjectFlexbox } from '../../../layout/styledComponents/'
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
  <StyledProjectFlexbox>
    <ProjectImage image={image} projectLink={link} />
    <ProjectInfo body={body} clientName={title} projectLink={link} />
  </StyledProjectFlexbox>
)

export default ProjectItem
