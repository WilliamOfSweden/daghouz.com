import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const isBrowser = typeof window !== 'undefined'

  const [width, setWidth] = useState<number>(
    isBrowser ? window.innerWidth : 300
  )

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width < 768
}
