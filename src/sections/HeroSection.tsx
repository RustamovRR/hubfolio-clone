'use client'

import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      <div className="max-xs:mt-0 relative container mx-auto mt-20 flex items-start py-10 max-md:flex-col max-sm:mt-6">
        <h1 className="flex-1 text-[120px] leading-[1.2] font-medium max-lg:text-[60px] max-md:text-[45px]">
          Marketing <br /> & SEO studio
        </h1>
        <div className="mt-12 w-[40%] pl-20 max-lg:mt-14 max-lg:w-1/2 max-lg:pl-0 max-md:mt-10 max-md:w-full">
          <p className="w-full">
            Connecting businesses with their audiences, and individuals with
            their dreams. Our path forward is one of continuous growth
          </p>
        </div>

        <div className="absolute -right-[2%] -bottom-[45%] z-50 flex h-[220px] w-[220px] items-center justify-center max-xl:-right-0 max-xl:-bottom-[35%] max-lg:-right-[10%] max-lg:-bottom-[80%] max-md:hidden">
          <Image
            src="/circle-text.svg"
            alt="Circle Text"
            width={220}
            height={220}
            className="h-full w-full"
          />
          <Image
            src="/union.svg"
            alt="Union"
            width={80}
            height={93}
            className="absolute translate-y-[10%]"
          />
        </div>
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

      <div className="container mx-auto mt-20 flex items-start py-10 max-lg:flex-col">
        <div className="w-2/5 max-lg:w-full">
          <h6 className="dot relative mt-4 text-sm font-medium uppercase before:!-left-[3%] max-lg:ml-6">
            the blend of simplicity and innovation
          </h6>
        </div>
        <div className="flex-1 max-lg:mt-6 max-lg:w-full">
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
