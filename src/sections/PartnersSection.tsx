'use client'

import Image from 'next/image'

export const PartnersSection = () => {
  const logos = [
    {
      url: 'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/clients/1.svg',
      width: 100,
      height: 34,
    },
    {
      url: 'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/clients/2.svg',
      width: 54,
      height: 52,
    },
    {
      url: 'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/clients/3.svg',
      width: 100,
      height: 45,
    },
    {
      url: 'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/clients/4.svg',
      width: 100,
      height: 30,
    },
    {
      url: 'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/clients/5.svg',
      width: 40,
      height: 40,
    },
  ]

  return (
    <div className="container mx-auto py-28">
      <div>
        <h6 className="dot relative ml-6 text-[20px] font-medium before:!top-3 before:!-left-[2%] max-lg:ml-6 max-lg:before:!-left-[3%] max-sm:before:!-left-[5%]">
          partner with +150 brands
        </h6>

        <div className="max-xs:grid-cols-1 mx-auto mt-16 mb-28 grid grid-cols-5 items-center justify-between gap-3 max-lg:grid-cols-3 max-lg:flex-wrap max-lg:gap-6 max-md:grid-cols-2">
          {logos.map(({ url, width, height }) => (
            <div
              key={url}
              className="flex h-[153px] w-full items-center justify-center rounded-[80px] border border-[#333] transition-colors"
            >
              <Image src={url} alt="" width={width} height={height} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
