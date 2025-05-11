'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

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

export const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType>(null)

  return (
    <>
      <div className="bg-primary-blue flex justify-between gap-40 rounded-[30px] max-lg:flex-col max-lg:gap-10 max-lg:pb-24 sm:p-12 lg:h-[571px]">
        {/* Left side with quote icon */}
        <div className="mt-10 max-lg:flex max-lg:items-start">
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

        {/* Right side with Swiper carousel */}
        <div className="flex w-[55%] items-center overflow-hidden max-lg:w-full">
          <div className="relative w-full">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Pagination]}
              loop={true}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: '.testimonials-pagination',
                bulletClass:
                  'inline-block h-2 w-2 cursor-pointer rounded-full bg-white/30 transition-all',
                bulletActiveClass: '!bg-white',
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex justify-center">
                    <div className="w-[90%]">
                      <p className="mb-8 text-4xl font-medium text-white">
                        {testimonial.text}
                      </p>

                      <hr className="my-8 border-white/20" />

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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation dots */}
            <div className="absolute right-[calc(50%-290px)] bottom-0 flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 max-lg:right-[5%]">
              <div className="testimonials-pagination flex items-center gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
