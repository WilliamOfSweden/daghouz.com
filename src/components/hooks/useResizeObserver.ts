import { throttle } from 'lodash'
import { useRef, useLayoutEffect, useCallback } from 'react'

type OnResize = (contentRect: DOMRectReadOnly) => void

export const useResizeObserver = (onResize: OnResize, delay: number = 100) => {
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  const throttledOnResize = useCallback(throttle(onResize, delay), [
    onResize,
    delay,
  ])

  const observe = useCallback(
    (element: Element | null) => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
      resizeObserverRef.current = new ResizeObserver(entries => {
        if (!Array.isArray(entries) || !entries.length) {
          return
        }
        throttledOnResize(entries[0].contentRect)
      })
      if (element) {
        resizeObserverRef.current.observe(element)
      }
    },
    [throttledOnResize],
  )

  useLayoutEffect(() => {
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    }
  }, [])

  return observe
}
