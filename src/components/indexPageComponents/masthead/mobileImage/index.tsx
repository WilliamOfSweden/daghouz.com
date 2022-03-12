import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MobileImage = () => (
  <StaticImage
    alt='Isometric image of a computer screen, laptop, tablet, smartphone and flowerpot.'
    className={'mobile-only'}
    formats={['auto', 'webp', 'avif']}
    layout='fullWidth'
    loading='eager'
    placeholder='tracedSVG'
    src='../../../../images/indexPageMasthead.svg'
  />
)

export default MobileImage
