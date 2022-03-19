import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const MobileImage = () => (
  <StaticImage
    alt='Isometric smartphone with multiple extracted displays.'
    className='mobile-only'
    formats={['auto', 'webp', 'avif']}
    layout='fullWidth'
    loading='eager'
    placeholder='tracedSVG'
    src='../../../../images/projects.svg'
  />
)
