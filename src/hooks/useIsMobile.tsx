import { useState, useEffect } from 'react'

const useIsMobile = () => {
  const isBrowser = typeof window !== 'undefined'

  const mediaQuery = '(min-width: 768px)'

  const [isMobile, setIsMobile] = useState(
    isBrowser && !matchMedia(mediaQuery).matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)

    const handleMediaQueryChange = (event: MediaQueryListEventInit) => {
      if (event.matches && isMobile) {
        setIsMobile(false)
      }
    }

    mediaQueryList.addEventListener('change', handleMediaQueryChange)

    return () => window.removeEventListener('change', handleMediaQueryChange)
  }, [])

  return isMobile
}

export default useIsMobile
