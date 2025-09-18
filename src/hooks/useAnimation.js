import { useState, useEffect, useCallback } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState('normal')

  const speedOptions = [
    { value: 'slow', label: '느리게', duration: 4 },
    { value: 'normal', label: '보통', duration: 2 },
    { value: 'fast', label: '빠르게', duration: 1 },
    { value: 'veryfast', label: '매우빠르게', duration: 0.5 }
  ]

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation])

  return {
    isAnimating,
    animationSpeed,
    speedOptions,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}