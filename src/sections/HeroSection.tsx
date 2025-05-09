'use client'

import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      <div className="relative mt-20 flex items-center p-10 px-36">
        <h1 className="flex-1 text-[120px] leading-[1.2] font-medium">
          Marketing <br /> & SEO studio
        </h1>
        <div className="w-2/5">
          <p>
            Connecting businesses with their audiences, and individuals with
            their dreams. Our path forward is one of continuous growth
          </p>
        </div>

        {/* <div className="absolute right-0 top-0"> */}
        <Image
          src="/circle-text.svg"
          alt="Circle Text"
          width={220}
          height={220}
          className="absolute right-[10%] -bottom-[50%] mb-6"
        />
        <Image
          src="/union.svg"
          alt="Union"
          width={80}
          height={93}
          className="absolute right-[14.5%] -bottom-[32%] mb-6"
        />
        {/* </div> */}
      </div>

      <section className="relative mt-20 h-[600px] overflow-hidden">
        <Image
          src="https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/header/bg1.jpg"
          alt=""
          width={1000}
          height={600}
          className="h-[600px] w-full object-cover"
        />
        <div className="hubfolio-text absolute right-[-50px] bottom-[-100px] z-50">
          HUBFOLIO
        </div>
      </section>

      <div className="mt-20 flex items-start p-10 px-36">
        <div className="w-2/5">
          <h6 className="blend_of_simplicity relative uppercase font-medium text-sm">
            the blend of simplicity and innovation
          </h6>
        </div>
        <div className="flex-1">
          <h3 className="text-[40px] font-medium leading-[52px]">
            <span className="text-[#999898]">Welcome to Hubfolio</span> — your
            reliable and friendly AI companion designed to make your daily life
            simpler and more enjoyable in this fast-paced world.
          </h3>
        </div>
      </div>
    </>
  )
}
