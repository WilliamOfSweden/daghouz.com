import { useState, useLayoutEffect } from 'react'

export const useIsMobile = () => {
  const isBrowser = typeof window !== 'undefined'

  const [width, setWidth] = useState<number>(
    isBrowser ? window.innerWidth : 300,
  )

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width < 600
}
