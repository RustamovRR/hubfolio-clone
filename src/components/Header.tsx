'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'
import { NAVIGATION_DATA } from '@/constants'
import { cn } from '@/utils'

const Header = () => {
  const [showSticky, setShowSticky] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      if (currentY < 50) {
        setShowSticky(false)
        setHideHeader(false)
      } else if (currentY < 300) {
        setHideHeader(true)
        setShowSticky(false)
      } else {
        setHideHeader(false)
        setShowSticky(true)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${hideHeader ? '-translate-y-[100px]' : 'translate-y-0'} ${showSticky ? 'bg-black/50 backdrop-blur-md' : ''} `}
    >
      <div className="mx-auto px-36 py-8">
        <div className="flex items-center justify-between">
          <section className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-[43px] rounded-[30px] border border-white/30 px-[15px] py-[7px]">
                <Image
                  src="/Logo-light.svg"
                  alt="Hubfolio"
                  width={160}
                  height={24}
                />
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex h-[43px] items-center rounded-[30px] border border-white/30 p-1">
              {NAVIGATION_DATA.map(({ href, title }, index) => (
                <Link
                  key={title}
                  href={href}
                  className={cn(
                    'flex h-full w-full items-center rounded-[30px] px-4 text-sm transition-colors hover:text-white',
                    index === 0 && 'bg-white/10',
                  )}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </section>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-colors hover:bg-gray-100"
            >
              <span className="text-sm font-medium">Start Project</span>
              <Image
                src="/arrow-top-right.svg"
                alt="arrow"
                width={18}
                height={18}
              />
            </Link>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#333] transition-colors hover:bg-white hover:text-black">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
