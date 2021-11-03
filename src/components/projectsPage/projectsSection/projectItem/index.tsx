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
    clientName,
    description: {
      markdownNode: {
        childMdx: { body },
      },
    },
    image,
    imageAlt,
    projectLink,
  },
}: DataProps) => (
  <StyledProjectFlexbox>
    <ProjectImage image={image} imageAlt={imageAlt} projectLink={projectLink} />
    <ProjectInfo
      body={body}
      clientName={clientName}
      projectLink={projectLink}
    />
  </StyledProjectFlexbox>
)

export default ProjectItem
