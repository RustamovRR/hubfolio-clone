'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const marqueeItems = [
  'TOP-NOTCH EXPERTS',
  'DEDICATED SUPPORT 24/7',
  'FLEXIBLE PRICING',
  'AI-DRIVEN SOLUTIONS',
]

const MarqueeSection = () => {
  const topRibbonRef = useRef<HTMLDivElement>(null)
  const bottomRibbonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topRibbon = topRibbonRef.current
    const bottomRibbon = bottomRibbonRef.current

    if (!topRibbon || !bottomRibbon) return

    // Clone items for seamless loop
    const topContent = topRibbon.querySelector('.marquee-content')
    const bottomContent = bottomRibbon.querySelector('.marquee-content')

    if (topContent && bottomContent) {
      topContent.innerHTML += topContent.innerHTML
      bottomContent.innerHTML += bottomContent.innerHTML
    }

    // Set initial position for bottom ribbon
    gsap.set(bottomContent, {
      x: '-50%',
    })

    // Top ribbon animation
    gsap.to(topContent, {
      x: '-50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
    })

    // Bottom ribbon animation
    gsap.to(bottomContent, {
      x: '0%',
      duration: 20,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <>
      {/* Top Ribbon */}
      <div
        ref={topRibbonRef}
        className="bg-primary-blue absolute z-10 w-full translate-y-20 rotate-[3deg] transform overflow-hidden py-8"
        style={{
          transformOrigin: 'left center',
        }}
      >
        <div className="marquee-content flex whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="mx-8 inline-flex items-center gap-8 text-2xl font-medium"
            >
              <span className="h-3 w-3 rounded-full bg-white" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div
        ref={bottomRibbonRef}
        className="bg-primary-black absolute w-full translate-y-32 -rotate-[3deg] transform overflow-hidden py-8"
        style={{
          transformOrigin: 'right center',
        }}
      >
        <div className="marquee-content flex whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="mx-8 inline-flex items-center gap-8 text-2xl font-medium"
            >
              <span className="h-3 w-3 rounded-full bg-white" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MarqueeSection
