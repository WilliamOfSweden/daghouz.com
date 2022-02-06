import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import useIsMobile from '../../../../hooks/useIsMobile'

const MobileImage = () => {
  const [isHidden, setIsHidden] = useState(false)

  const isMobile = useIsMobile()

  useEffect(() => {
    !isMobile && setIsHidden(true)
  }, [isMobile])

  if (isHidden) return null

  return (
    <StaticImage
      alt='Isometric web development items and rocket.'
      className={'mobile-only'}
      formats={['auto', 'webp', 'avif']}
      layout='fullWidth'
      loading='eager'
      placeholder='tracedSVG'
      src='../../../../images/projects.svg'
    />
  )
}

export default MobileImage
