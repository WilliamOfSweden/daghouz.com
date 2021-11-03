import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { StyledGatsbyImage } from '../../../layout/styledComponents'

interface Props {
  image: {
    gatsbyImageData: IGatsbyImageData
  }
  imageAlt: string
  projectLink: string
}

const ProjectImage = ({
  image: { gatsbyImageData },
  imageAlt,
  projectLink,
}: Props) => (
  <a
    aria-label='Link to project website.'
    href={`https://${projectLink}`}
    rel='noreferrer noopener'
    target='_blank'
  >
    <StyledGatsbyImage alt={imageAlt} image={gatsbyImageData} />
  </a>
)

export default ProjectImage
