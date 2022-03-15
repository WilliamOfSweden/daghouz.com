import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import * as projectItemStyles from './projectItem.module.css'

interface Props {
  image: {
    description: string
    gatsbyImageData: IGatsbyImageData
  }
  projectLink: string
}

export const ProjectImage = ({
  image: { description, gatsbyImageData },
  projectLink,
}: Props) => (
  <a
    aria-label='Link to project website.'
    className={projectItemStyles.link}
    href={projectLink}
    rel='noreferrer noopener'
    target='_blank'
  >
    <GatsbyImage
      alt={description}
      className={projectItemStyles.img}
      image={gatsbyImageData}
    />
  </a>
)
