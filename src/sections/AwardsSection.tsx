'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Award {
  id: number
  platform: string
  title: string
  date: string
}

const awards: Award[] = [
  {
    id: 1,
    platform: 'Awwwards',
    title: 'SOTY 2023 - 1st Winner',
    date: 'May 2023',
  },
  {
    id: 2,
    platform: 'css awards',
    title: 'Top 5 Best of eCommerce Websites 2022',
    date: 'Dec 2022',
  },
  {
    id: 3,
    platform: 'Awwwards',
    title: 'Honor SOTD November, 2022r',
    date: 'Nov 2022',
  },
  {
    id: 4,
    platform: 'Behance Portfolio',
    title: 'Winner - US Behance Portfolio Review 2021',
    date: 'Aug 2021',
  },
]

export const AwardsSection = () => {
  const listRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    // Initialize hover animations
    listRefs.current.forEach((item) => {
      if (!item) return

      const bg = item.querySelector('.bg')

      gsap.set(bg, {
        yPercent: 100,
      })

      item.addEventListener('mouseenter', () => {
        gsap.to(bg, {
          yPercent: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
      })

      item.addEventListener('mouseleave', () => {
        gsap.to(bg, {
          yPercent: 100,
          duration: 0.4,
          ease: 'power2.out',
        })
      })
    })
  }, [])

  return (
    <>
      <div className="flex items-start justify-between gap-20 max-lg:flex-col">
        {/* Left side - Text */}
        <div className="w-2/5 max-lg:w-full">
          <h6 className="dot relative mb-6 ml-8 text-[20px] font-medium before:!top-3 before:!-left-[7%] max-lg:before:!-left-[4%]">
            Awards & Recognition
          </h6>
          <h2 className="text-4xl leading-tight font-medium">
            Efforts to receive worthy rewards, awards & recognition{' '}
            <span className="text-[#999898]">help us affirm our brand.</span>
          </h2>
        </div>

        {/* Right side - Awards list */}
        <div className="flex-1 max-lg:w-full">
          <div className="flex items-center border-b border-white/70 pb-8 text-sm">
            <span className="w-1/2 text-[12px] font-medium text-[#BBBBBB]">
              AWARD TITLE
            </span>
            <span className="w-1/2 text-right text-[12px] font-medium text-[#BBBBBB]">
              DATE
            </span>
          </div>
          <ul>
            {awards.map((award, index) => (
              <li
                key={award.id}
                ref={(el) => (listRefs.current[index] = el)}
                className="group relative h-[114px] cursor-pointer overflow-hidden border-b border-[#333] max-sm:h-auto"
              >
                {/* Hover background */}
                <div className="bg-primary-black absolute inset-0 origin-bottom scale-y-0 transform transition-transform duration-500 ease-in-out group-hover:scale-y-100" />

                {/* Content */}
                <div className="relative flex items-start justify-between py-8 max-sm:flex-col">
                  <div>
                    <span className="mb-2 block text-sm font-medium text-white">
                      {award.platform}
                    </span>
                    <h3 className="text-2xl font-medium transition-colors group-hover:text-white">
                      {award.title}
                    </h3>
                  </div>
                  <span className="text-sm text-[#BBBBBB]">{award.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
