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
      <section>
        <HeroSection />
      </section>

      <section className="mt-20 p-10 px-36" ref={servicesRef}>
        <OurServicesSection />
      </section>

      <section
        className="relative mt-20 mb-40 h-[300px] overflow-hidden bg-black"
        ref={marqueeRef}
      >
        <MarqueeSection />
      </section>

      <section className="mt-20 py-10" ref={worksRef}>
        <FeaturedWorksSection />
      </section>

      <section className="py-10">
        <PartnersSection />
      </section>

      <section className="py-10">
        <TestimonialsSection />
      </section>

      <section className="py-10">
        <AwardsSection />
      </section>

      <section className="py-10">
        <ExperienceSection />
      </section>

      <section className="py-10 pt-[200px]">
        <ArticlesSection />
      </section>

      <NewsletterSection />
    </div>
  )
}
