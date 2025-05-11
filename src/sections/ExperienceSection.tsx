'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Experience {
  id: number
  title: string
  subtitle: string
  value: string
  label: string
  label2?: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Our Experience',
    subtitle:
      'We help creative agencies, designers, and other creative people to connect with potential clients.',
    value: '12',
    label: 'YEARS OF EXPERIENCE',
  },
  {
    id: 2,
    title: 'Our Successfully',
    subtitle: 'We are a passionate team of designers and developers.',
    value: '64',
    label: 'PROJECTS COMPLETED',
  },
  {
    id: 3,
    title: 'Our Growth',
    subtitle: 'Commitment to Innovation and Growth.',
    value: '180%',
    label: 'CONVERSIONS',
    label2: 'GROWTH INCREASED',
  },
]

export const ExperienceSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: '.sticky-image',
      pinSpacing: false,
    })
  }, [])

  return (
    <div ref={wrapperRef} className="relative py-10">
      <div className="mx-auto">
        <div className="flex gap-12">
          {/* Left side - Sticky Image */}
          <div className="flex-1 max-lg:hidden">
            <div className="sticky-image sticky -top-10">
              <div className="relative h-screen w-full overflow-hidden">
                <Image
                  src="https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/about.jpg"
                  alt="Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Scrolling Content */}
          <div
            ref={contentRef}
            className="w-[47%] max-lg:container max-lg:mx-auto max-lg:w-full"
          >
            {experiences.map(
              ({ id, title, subtitle, value, label, label2 }) => (
                <div key={id} className="mt-40 max-lg:mt-20">
                  <h6 className="dot relative mb-6 ml-7 text-[20px] font-medium text-[#999898] before:!top-3 before:!-left-[4%] max-lg:before:!-left-[3%]">
                    {title}
                  </h6>

                  <h2 className="mr-10 mb-4 border-b border-white/10 pb-16 text-[40px] leading-[52px] font-medium">
                    {subtitle}
                  </h2>

                  <div className="max-xs:flex-wrap mt-8 flex items-end justify-between gap-8 pr-8">
                    <span className="text-[100px] leading-none font-semibold opacity-10">
                      {value}
                    </span>
                    <span className="mb-6 text-lg text-white">
                      {label}
                      {label2 && <br />}
                      {label2}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
