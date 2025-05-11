'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  HeroSection,
  MarqueeSection,
  OurServicesSection,
  FeaturedWorksSection,
  PartnersSection,
  TestimonialsSection,
  AwardsSection,
  ExperienceSection,
  ArticlesSection,
  NewsletterSection,
} from '@/sections'

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const worksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animations
      gsap.utils
        .toArray<HTMLElement>('.animate-on-scroll')
        .forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
          })
        })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <section className='overflow-hidden'>
        <HeroSection />
      </section>

      {/* <section className="container mx-auto mt-20 py-10" ref={servicesRef}>
        <OurServicesSection />
      </section> */}

      {/* <section className="relative h-[300px] overflow-hidden" ref={marqueeRef}>
        <MarqueeSection />
      </section> */}

      {/* <section ref={worksRef} className="mt-28">
        <FeaturedWorksSection />
      </section> */}

      {/* <section className="bg-primary-black mt-20 rounded-t-[30px]">
        <PartnersSection />
      </section> */}

      {/* <section className="container mx-auto -translate-y-28">
        <TestimonialsSection />
      </section> */}

      {/* <section className="container mx-auto py-10">
        <AwardsSection />
      </section> */}

      {/* <section className="py-10">
        <ExperienceSection />
      </section> */}

      {/* <section className="container mx-auto pt-20 pb-32">
        <ArticlesSection />
      </section> */}

      {/* <section className="bg-theme-color border-t border-white/30">
        <NewsletterSection />
      </section> */}
    </div>
  )
}
