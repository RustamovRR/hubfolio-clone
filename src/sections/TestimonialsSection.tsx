'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import Image from 'next/image'

gsap.registerPlugin(Draggable)

interface Testimonial {
  id: number
  text: string
  author: string
  position: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Hubfolio studio ability to create a high quality UI stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!",
    author: 'Bradley Gordon',
    position: 'CEO & Founder',
    company: 'Archin Studio',
    avatar:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/testim/avatar3.jpg',
  },
  {
    id: 2,
    text: "Hubfolio studio ability to create a high quality UI stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!",
    author: 'Sarah Chen',
    position: 'Creative Director',
    company: 'Design Co',
    avatar:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/testim/avatar1.jpg',
  },
  {
    id: 3,
    text: "Hubfolio studio ability to create a high quality UI stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!",
    author: 'Michael Ross',
    position: 'Product Manager',
    company: 'Tech Solutions',
    avatar:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/testim/avatar2.jpg',
  },
]

// Create extended array for infinite loop
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(testimonials.length) // Start from middle array
  const testimonialContentRef = useRef<HTMLDivElement>(null)
  const dragInstance = useRef<Draggable | null>(null)
  const isAnimating = useRef(false)
  const startX = useRef(0)

  const handleDotClick = (index: number) => {
    if (isAnimating.current || !testimonialContentRef.current) return

    const realIndex = index + testimonials.length
    const slideWidth = testimonialContentRef.current.offsetWidth

    isAnimating.current = true
    gsap.to(testimonialContentRef.current, {
      x: -(realIndex * slideWidth),
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => {
        setActiveIndex(realIndex)
        isAnimating.current = false
      },
    })
  }

  useEffect(() => {
    if (!testimonialContentRef.current) return

    const slideWidth = testimonialContentRef.current.offsetWidth

    // Set initial position
    gsap.set(testimonialContentRef.current, {
      x: -(activeIndex * slideWidth),
    })

    dragInstance.current = Draggable.create(testimonialContentRef.current, {
      type: 'x',
      inertia: true,
      onDragStart: function () {
        if (isAnimating.current) {
          this.endDrag()
          return
        }
        startX.current = this.x
      },
      onDrag: function () {
        const currentX = this.x
        const totalWidth = slideWidth * testimonials.length

        if (currentX < -(totalWidth * 2)) {
          this.x += totalWidth
          startX.current += totalWidth
        } else if (currentX > -totalWidth) {
          this.x -= totalWidth
          startX.current -= totalWidth
        }
      },
      onDragEnd: function () {
        const movement = this.x - startX.current
        const threshold = 100
        const currentPosition = Math.abs(this.x)
        const currentIndex = Math.round(currentPosition / slideWidth)
        let targetIndex = currentIndex

        if (Math.abs(movement) > threshold) {
          targetIndex = movement > 0 ? currentIndex - 1 : currentIndex + 1
        }

        isAnimating.current = true

        gsap.to(testimonialContentRef.current, {
          x: -(targetIndex * slideWidth),
          duration: 0.8,
          ease: 'power3.out',
          onComplete: () => {
            setActiveIndex(targetIndex)
            isAnimating.current = false

            if (targetIndex >= testimonials.length * 2) {
              gsap.set(testimonialContentRef.current, {
                x: -(testimonials.length * slideWidth),
              })
              setActiveIndex(testimonials.length)
            } else if (targetIndex < testimonials.length) {
              gsap.set(testimonialContentRef.current, {
                x: -(testimonials.length * 2 * slideWidth),
              })
              setActiveIndex(testimonials.length * 2)
            }
          },
        })
      },
    })[0]

    return () => {
      if (dragInstance.current) {
        dragInstance.current.kill()
      }
    }
  }, [activeIndex])

  return (
    <>
      <div className="bg-primary-blue flex h-[571px] justify-between gap-40 rounded-2xl p-12">
        {/* Left side with quote icon */}
        <div className="mt-10">
          <div className="relative flex items-center justify-center rounded-full">
            <Image
              src="/vector-circle-text.svg"
              width={240}
              height={240}
              alt=""
            />
            <Image
              src="/vector-quote.svg"
              width={100}
              height={77}
              alt=""
              className="absolute"
            />
          </div>
        </div>

        {/* Right side with draggable carousel */}
        <div className="flex w-[55%] items-center overflow-hidden">
          <div className="relative w-full">
            <div
              ref={testimonialContentRef}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex w-full shrink-0 justify-center"
                >
                  <div className="w-[90%]">
                    <p className="mb-8 text-4xl font-medium text-white">
                      {testimonial.text}
                    </p>

                    <hr className="my-8 border-white/20" />

                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full bg-white/10">
                          {testimonial.avatar && (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <h4 className="mb-1 text-lg font-medium text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-[#BBBBBB]">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots - now positioned absolutely */}
            <div className="absolute right-[calc(50%-250px)] bottom-0 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === activeIndex % testimonials.length
                      ? 'bg-white'
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
