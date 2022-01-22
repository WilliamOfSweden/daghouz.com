import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as mobileImageStyles from './mobileImage.module.css'

const MobileImage = () => (
  <div className={mobileImageStyles.imgWrapper}>
    <StaticImage
      src='../../../../images/rocket.svg'
      alt='Isometric web development items and rocket.'
      loading='eager'
      formats={['auto', 'webp', 'avif']}
      placeholder='tracedSVG'
      layout='fullWidth'
    />
  </div>
)

export default MobileImage
