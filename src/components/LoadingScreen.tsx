'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LoadingScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Loading text animatsiyasi
    tl.to(textRef.current, {
      duration: 0.1,
      opacity: 1,
      ease: 'none',
    })

    // 2 sekund kutish
    tl.to(
      {},
      {
        duration: 2,
      },
    )

    // Text yuqoriga fade out
    tl.to(textRef.current, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: 'power2.in',
    })

    // Background yuqoriga tortiladi
    tl.to(containerRef.current, {
      duration: 1.5,
      y: '-100%', // Yuqoriga translate qilish
      ease: 'power3.inOut',
      onComplete: () => {
        document.body.style.overflow = 'auto'
        if (containerRef.current) {
          containerRef.current.style.display = 'none'
        }
      },
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-theme-color fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Loading text */}
      <div ref={textRef} className="relative translate-y-4 opacity-0">
        <svg width="400" height="80" viewBox="0 0 400 80">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, i) => (
            <text
              key={i}
              x={100 + i * 35}
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="loading-letter fill-white"
              style={
                {
                  animation: `flicker 2s linear infinite ${i * 0.2}s`,
                  opacity: 0.15,
                } as React.CSSProperties
              }
            >
              {letter}
            </text>
          ))}
        </svg>
      </div>
    </div>
  )
}

export default LoadingScreen
