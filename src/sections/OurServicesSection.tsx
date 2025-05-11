'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/utils'

interface ServiceItem {
  id: number
  title: string
  description: string
  icon: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Branding',
    description: 'Brand Identity, Strategy & Consult, Position, Rebrand',
    icon: '/crown-solid.svg',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Brand Identity, Strategy & Consult, Position, Rebrand',
    icon: '/chart-line-solid.svg',
  },
  {
    id: 3,
    title: 'Code',
    description: 'Brand Identity, Strategy & Consult, Position, Rebrand',
    icon: '/code-solid.svg',
  },
  {
    id: 4,
    title: 'Growth',
    description: 'Brand Identity, Strategy & Consult, Position, Rebrand',
    icon: '/bezier-curve-solid.svg',
  },
]

const OurServicesSection = () => {
  return (
    <>
      {/* Title and Button */}
      <div className="max-xs:flex-col flex items-center justify-between max-sm:items-start">
        <h2 className="text-5xl font-medium">Our Services</h2>
        <button className="flex h-[53px] items-center gap-2 rounded-full border border-white p-6 transition-all duration-300 hover:bg-white hover:text-black max-sm:my-6">
          <span className="text-sm font-medium">See Our Approach</span>
          <ChevronRight />
        </button>
      </div>

      {/* Services List */}
      <div className="mt-10 grid grid-cols-1">
        {services.map(({ id, title, description, icon }, index) => (
          <div
            key={id}
            className={cn(
              'group relative flex h-[120px] overflow-hidden border-t px-4 py-8',
              'cursor-none border-[#333] transition-all duration-500 hover:h-[180px]',
              'hover:bg-primary-black',
              'max-lg:items-center max-sm:h-[180px] max-sm:flex-col max-sm:items-start',
              index === services.length - 1 ? 'border-b' : '',
            )}
          >
            <div className="h-[120px]">
              <h3 className="group-hover:text-primary-blue translate-y-2 text-[120px] leading-[0.8] font-medium text-white transition-colors duration-500 max-lg:mt-8 max-lg:text-[45px] max-sm:mt-0 max-sm:text-left">
                {title}
              </h3>
            </div>
            <div className="group-hover:text-primary-blue maxlg:transform-none ml-auto flex items-center gap-10 transition-transform duration-500 sm:group-hover:translate-y-2">
              <div className="flex-1 max-[400px]:mt-6 sm:w-[300px]">
                <p className="text-white">{description}</p>
              </div>
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/10">
                <Image src={icon} alt="" width={30} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OurServicesSection
