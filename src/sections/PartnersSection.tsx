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
    <section className="py-20">
      <div className="container mx-auto">
        <h6 className="partner_with ml-6 relative text-[20px] font-medium">
          partner with +150 brands
        </h6>

        <div className="mx-auto mt-16 mb-28 flex items-center justify-between gap-3">
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
    </section>
  )
}
