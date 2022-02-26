import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { useIsMobile } from '../../../../hooks/'

const MobileImage = () => {
  const [isHidden, setIsHidden] = useState(false)

  const isMobile = useIsMobile()

  useEffect(() => {
    !isMobile && setIsHidden(true)
  }, [isMobile])

  if (isHidden) return null

  return (
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
}

export default MobileImage
