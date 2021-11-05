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

const ProjectImage = ({
  image: { description, gatsbyImageData },
  projectLink,
}: Props) => (
  <a
    aria-label='Link to project website.'
    href={projectLink}
    rel='noreferrer noopener'
    style={{
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    }}
    target='_blank'
  >
    <GatsbyImage
      alt={description}
      className={projectItemStyles.img}
      image={gatsbyImageData}
    />
  </a>
)

export default ProjectImage
