'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { gsap } from 'gsap'
import 'swiper/css'

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

export const FeaturedWorksSection = () => {
  const swiperRef = useRef<SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)

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
          <h3 class="text-[50px] font-medium">${nextWork.title}</h3>
          <p class="font-sm font-light text-white">${nextWork.category}</p>
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

  return (
    <>
      <div className="container mx-auto mb-20 flex items-start justify-between max-lg:flex-col">
        <h6 className="dot relative text-[20px] font-medium before:!top-3 before:!-left-[15%] max-lg:ml-5">
          Featured Works
        </h6>
        <div className="w-3/5 max-lg:mt-4 max-lg:w-full">
          <h2 className="text-4xl font-medium">
            Our user-centered design encourages{' '}
            <span className="text-[#999898]">
              productivity & boosts revenue.
            </span>
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => {
            const direction =
              swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev'
            setActiveIndex(swiper.realIndex)
            animateTitle(works[swiper.realIndex], direction)
          }}
          modules={[Navigation]}
          loop={true}
          speed={1500}
          slidesPerView="auto"
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="w-full"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div className="relative mx-auto h-[480px] w-[calc(49vw)] max-lg:w-[calc(100vw-32px)]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slide Title */}
        <div ref={titleRef} className="mt-10 overflow-hidden text-center">
          <h3 className="text-[50px] font-medium">
            {works[activeIndex % works.length].title}
          </h3>
          <p className="font-sm font-light text-white">
            {works[activeIndex % works.length].category}
          </p>
        </div>

        <div className="mx-10 flex flex-col items-center max-lg:mt-10">
          <div className="mb-6 flex w-full items-center justify-between">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex cursor-pointer items-center gap-2 text-lg transition-opacity hover:opacity-70 disabled:opacity-30"
            >
              <ChevronLeft />
              Prev Slide
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex cursor-pointer items-center gap-2 text-lg transition-opacity hover:opacity-70 disabled:opacity-30"
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
