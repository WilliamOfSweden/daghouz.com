import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const MobileImage = () => (
  <StaticImage
    alt='Isometric web development items and rocket.'
    className='mobile-only'
    formats={['auto', 'webp', 'avif']}
    layout='fullWidth'
    loading='eager'
    placeholder='tracedSVG'
    src='../../../../images/rocket.svg'
  />
)
