import React, { useRef, useEffect } from 'react'

import { animatedCoordinates, coordinates } from './coordinates'
import { useResizeObserver } from '../../hooks/'
import * as styles from './canvas2D.module.css'

type AnimatedDot = {
  delay: number
  lastUpdate: number
  opacity: number
  radius: number
  hasStarted: boolean
}

const Canvas2D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const animatedDotsRef = useRef<AnimatedDot[]>([])

  const animationDelays = [0, 500, 1000]

  useEffect(() => {
    animatedDotsRef.current = animatedCoordinates.flatMap(() =>
      animationDelays.map(delay => ({
        delay,
        hasStarted: false,
        lastUpdate: Date.now(),
        opacity: 1,
        radius: 1,
      })),
    )
  }, [])

  const drawCanvas = (cssWidth: number, cssHeight: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d', { alpha: false, desynchronized: true })
    const ratio = window.devicePixelRatio || 1

    if (canvas && ctx) {
      canvas.width = cssWidth * ratio
      canvas.height = cssHeight * ratio

      ctx.fillStyle = 'hsl(221,24%,13%)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'hsl(0,0%,100%)'
      const radius = cssWidth / 328 / 2

      coordinates.forEach((ys, x) => {
        ys.forEach(y => {
          ctx.beginPath()
          ctx.arc(
            (cssWidth / 198 / 2) * ratio * (x * 2 + 1),
            (cssWidth / 198 / 2) * ratio * (y * 2 + 1),
            radius * ratio * 0.7,
            0,
            2 * Math.PI,
          )
          ctx.fill()
        })
      })

      ctx.fillStyle = `rgb(0, 173, 124)`
      animatedCoordinates.forEach(cord => {
        ctx.beginPath()
        ctx.arc(
          (cssWidth / 198 / 2) * ratio * (cord[0] * 2 + 1),
          (cssWidth / 198 / 2) * ratio * (cord[1] * 2 + 1),
          radius * ratio * 2,
          0,
          2 * Math.PI,
        )
        ctx.fill()
      })
    }
  }

  const drawPulsatingDot = (
    ctx: CanvasRenderingContext2D | null | undefined,
    x: number,
    y: number,
    dot: AnimatedDot,
    ratio: number,
  ) => {
    if (!ctx) return

    ctx.fillStyle = `rgba(0, 173, 124, ${dot.opacity})`
    ctx.beginPath()
    ctx.arc(x, y, dot.radius * ratio, 0, 2 * Math.PI)
    ctx.fill()

    ctx.strokeStyle = `rgba(0, 173, 124, ${dot.opacity})`
    ctx.lineWidth = ratio
    ctx.beginPath()
    ctx.arc(x, y, dot.radius * ratio * 1.1, 0, 2 * Math.PI)
    ctx.stroke()
  }

  const animate = (cssWidth: number, lastFrameTime: number) => {
    const currentTime = Date.now()
    const deltaTime = currentTime - lastFrameTime

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const ratio = window.devicePixelRatio || 1
    const maxRadius = (cssWidth / 328) * 4
    const minRadius = cssWidth / 328 / 2
    const step = ((maxRadius - minRadius) / 120) * (deltaTime / (1000 / 60))

    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawCanvas(cssWidth, canvas.height / ratio)

      animatedDotsRef.current.forEach((dot, index) => {
        const coordinateIndex = Math.floor(index / animationDelays.length)
        const [xPos, yPos] = animatedCoordinates[coordinateIndex]
        const x = (cssWidth / 198 / 2) * ratio * (xPos * 2 + 1)
        const y = (cssWidth / 198 / 2) * ratio * (yPos * 2 + 1)

        if (!dot.hasStarted && Date.now() - dot.lastUpdate >= dot.delay) {
          dot.hasStarted = true
          dot.lastUpdate = Date.now()
        }

        if (dot.hasStarted) {
          dot.radius += step
          dot.opacity = 1 - (dot.radius - minRadius) / (maxRadius - minRadius)

          if (dot.radius >= maxRadius) {
            dot.radius = minRadius
            dot.opacity = 1
            dot.lastUpdate = Date.now()
          }

          drawPulsatingDot(ctx, x, y, dot, ratio)
        }
      })
    }

    requestRef.current = requestAnimationFrame(() =>
      animate(cssWidth, currentTime),
    )
  }

  const handleResize = (contentRect: DOMRectReadOnly) => {
    drawCanvas(contentRect.width, contentRect.height)

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current)
    }

    animate(contentRect.width, Date.now())
  }

  const observe = useResizeObserver(handleResize)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      drawCanvas(canvas.offsetWidth, canvas.offsetHeight)
      animate(canvas.offsetWidth, Date.now()) // Start the animation loop with the current time
    }
    observe(canvas)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [observe])

  return <canvas className={styles.canvas} ref={canvasRef} />
}

export default Canvas2D
