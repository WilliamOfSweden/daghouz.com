import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { StyledGatsbyImage } from '../../../layout/styledComponents'

interface Props {
  image: {
    description: string
    gatsbyImageData: IGatsbyImageData
  }
  projectLink: string
}

const ProjectImage = ({
  image: { description, gatsbyImageData },
  projectLink,
}: Props) => (
  <a
    aria-label='Link to project website.'
    href={projectLink}
    rel='noreferrer noopener'
    target='_blank'
  >
    <StyledGatsbyImage alt={description} image={gatsbyImageData} />
  </a>
)

export default ProjectImage
