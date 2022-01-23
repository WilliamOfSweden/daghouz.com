import React, { Fragment } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import useIsMobile from '../../../hooks/useIsMobile'

const MobileImage = () => {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return null
  }

  return (
    <Fragment>
      {isMobile ? (
        <StaticImage
          src='../../../images/rocket.svg'
          alt='Isometric web development items and rocket.'
          loading='eager'
          formats={['auto', 'webp', 'avif']}
          placeholder='tracedSVG'
          layout='fullWidth'
        />
      ) : null}
    </Fragment>
  )
}

export default MobileImage
