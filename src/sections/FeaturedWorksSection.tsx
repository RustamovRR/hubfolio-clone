'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { Draggable } from 'gsap/Draggable'
import { ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(Draggable)

interface WorkItem {
  id: number
  title: string
  category: string
  image: string
}

const works: WorkItem[] = [
  {
    id: 1,
    title: 'Avocado Cutter',
    category: 'Digital Design',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/works/1.jpg',
  },
  {
    id: 2,
    title: 'The joy of music',
    category: 'Branding',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/works/2.jpg',
  },
  {
    id: 3,
    title: 'Bank Rebranding',
    category: 'Branding',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/works/3.jpg',
  },
  {
    id: 4,
    title: 'Carved Wood',
    category: 'Product Design',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/works/5.jpg',
  },
  {
    id: 5,
    title: 'Bloom air purifier',
    category: 'Digital Art',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/works/7.jpg',
  },
]

// Create duplicated array for infinite loop
const extendedWorks = [...works, ...works, ...works]

export const FeaturedWorksSection = () => {
  const [currentSlide, setCurrentSlide] = useState(works.length) // Start from middle array
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const dragInstance = useRef<Draggable | null>(null)

  // Calculate center offset for active slide
  const calculateCenterOffset = () => {
    if (!sliderWrapperRef.current) return 0
    const wrapperWidth = sliderWrapperRef.current.offsetWidth
    const slideWidth = 918 + 24 // slide width + gap
    return (wrapperWidth - slideWidth) / 2
  }

  useEffect(() => {
    if (!sliderRef.current || !sliderWrapperRef.current) return

    const centerOffset = calculateCenterOffset()

    // Initialize draggable
    dragInstance.current = Draggable.create(sliderRef.current, {
      type: 'x',
      inertia: true,
      onDrag: function () {
        if (isAnimating) return
        const currentX = this.x
        const slideWidth = 918 + 24 // slide width + gap
        const totalWidth = slideWidth * works.length

        // Check if we need to jump to create infinite effect
        if (currentX < -(totalWidth * 2) + centerOffset) {
          this.x += totalWidth
        } else if (currentX > -totalWidth + centerOffset) {
          this.x -= totalWidth
        }
      },
      onDragEnd: function () {
        if (isAnimating) return
        const currentX = this.x - centerOffset
        const slideWidth = 918 + 24 // slide width + gap
        const snapX =
          Math.round(currentX / slideWidth) * slideWidth + centerOffset

        setIsAnimating(true)
        gsap.to(sliderRef.current, {
          x: snapX,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => setIsAnimating(false),
        })

        const newSlide =
          Math.abs(Math.round(currentX / slideWidth)) % works.length
        if (newSlide !== currentSlide % works.length) {
          setCurrentSlide(works.length + newSlide)
          animateTitle(
            works[newSlide],
            newSlide > currentSlide % works.length ? 'next' : 'prev',
          )
        }
      },
    })[0]

    // Initial position
    gsap.set(sliderRef.current, {
      x: -(currentSlide * (918 + 24)) + centerOffset,
    })

    // Update position on window resize
    const handleResize = () => {
      if (!sliderRef.current) return
      const newOffset = calculateCenterOffset()
      const slideWidth = 918 + 24
      gsap.set(sliderRef.current, {
        x: -(currentSlide * slideWidth) + newOffset,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (dragInstance.current) {
        dragInstance.current.kill()
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [currentSlide, isAnimating])

  const animateTitle = (nextWork: WorkItem, direction: 'next' | 'prev') => {
    if (!titleRef.current) return

    const yOffset = direction === 'next' ? 100 : -100

    // Animate current title out
    gsap.to(titleRef.current, {
      y: -yOffset,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        // Update content and animate in
        gsap.set(titleRef.current, { y: yOffset })
        titleRef.current!.innerHTML = `
          <h3 class="text-3xl font-medium mb-2">${nextWork.title}</h3>
          <p class="text-[#999898]">${nextWork.category}</p>
        `
        gsap.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
      },
    })
  }

  const slideAnimation = (direction: 'next' | 'prev') => {
    if (!sliderRef.current || isAnimating) return

    setIsAnimating(true)
    const nextSlide = direction === 'next' ? currentSlide + 1 : currentSlide - 1

    const slideWidth = 918 + 24 // slide width + gap
    const centerOffset = calculateCenterOffset()
    const xPos = -(nextSlide * slideWidth) + centerOffset

    gsap.to(sliderRef.current, {
      x: xPos,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        // Check if we need to jump to create infinite effect
        if (nextSlide >= works.length * 2) {
          gsap.set(sliderRef.current, {
            x: -(works.length * slideWidth) + centerOffset,
          })
          setCurrentSlide(works.length)
        } else if (nextSlide < works.length) {
          gsap.set(sliderRef.current, {
            x: -(works.length * 2 * slideWidth) + centerOffset,
          })
          setCurrentSlide(works.length * 2)
        } else {
          setCurrentSlide(nextSlide)
        }
        setIsAnimating(false)
      },
    })

    const nextWorkIndex = nextSlide % works.length
    animateTitle(works[nextWorkIndex], direction)
  }

  return (
    <>
      {/* Header */}
      <div className="mb-20 flex items-start justify-between px-36">
        <h6 className="featured_works relative text-[20px] font-medium">
          Featured Works
        </h6>
        <div className="w-3/5">
          <h2 className="text-4xl font-medium">
            Our user-centered design encourages{' '}
            <span className="text-[#999898]">
              productivity & boosts revenue.
            </span>
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden" ref={sliderWrapperRef}>
        <div ref={sliderRef} className="relative flex gap-6">
          {extendedWorks.map((work, index) => (
            <div key={`${work.id}-${index}`} className="relative shrink-0">
              <div className="relative h-[480px] w-[918px]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Slide Title */}
        <div ref={titleRef} className="overflow-hidden text-center mt-10">
          <h3 className="text-[50px] font-medium">
            {works[currentSlide % works.length].title}
          </h3>
          <p className="font-sm font-light text-white">
            {works[currentSlide % works.length].category}
          </p>
        </div>

        {/* Navigation and Title */}
        <div className="mx-10 flex flex-col items-center">
          <div className="mb-6 flex w-full items-center justify-between">
            <button
              onClick={() => slideAnimation('prev')}
              disabled={isAnimating}
              className="flex items-center gap-2 text-lg transition-opacity hover:opacity-70 disabled:opacity-30"
            >
              <ChevronLeft />
              Prev Slide
            </button>

            <button
              onClick={() => slideAnimation('next')}
              disabled={isAnimating}
              className="flex items-center gap-2 text-lg transition-opacity hover:opacity-70 disabled:opacity-30"
            >
              Next Slide
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
