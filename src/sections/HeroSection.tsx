'use client'

import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      <div className="relative container mx-auto mt-20 flex items-start py-10">
        <h1 className="flex-1 text-[120px] leading-[1.2] font-medium max-lg:text-[60px]">
          Marketing <br /> & SEO studio
        </h1>
        <div className="mt-12 w-[40%] pl-20 max-lg:mt-14 max-lg:w-1/2 max-lg:pl-0">
          <p className="w-full">
            Connecting businesses with their audiences, and individuals with
            their dreams. Our path forward is one of continuous growth
          </p>
        </div>

        <Image
          src="/circle-text.svg"
          alt="Circle Text"
          width={220}
          height={220}
          className="absolute right-[10%] -bottom-[49%] z-50 mb-6 max-lg:-right-[10%] max-lg:-bottom-[92%]"
        />
        <Image
          src="/union.svg"
          alt="Union"
          width={80}
          height={93}
          className="absolute right-[15%] -bottom-[32%] z-50 mb-6 max-lg:-right-[1%] max-lg:-bottom-[65%]"
        />
      </div>

      <section className="relative mt-20 h-[600px] w-full overflow-hidden">
        <Image
          src="https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/header/bg1.jpg"
          alt=""
          fill
          className="h-[600px] object-cover"
        />
        <div className="hubfolio-text absolute right-[-50px] bottom-[-100px] z-50">
          HUBFOLIO
        </div>
      </section>

      <div className="container mx-auto mt-20 flex items-start py-10">
        <div className="w-2/5">
          <h6 className="dot relative text-sm font-medium uppercase">
            the blend of simplicity and innovation
          </h6>
        </div>
        <div className="flex-1">
          <h3 className="text-[40px] leading-[52px] font-medium">
            <span className="text-[#999898]">Welcome to Hubfolio</span> — your
            reliable and friendly AI companion designed to make your daily life
            simpler and more enjoyable in this fast-paced world.
          </h3>
        </div>
      </div>
    </>
  )
}
