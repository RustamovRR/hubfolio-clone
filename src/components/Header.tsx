'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  const [showSticky, setShowSticky] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      // 1. Dastlabki 50px scrollda header ko‘rinadi
      if (currentY < 50) {
        setShowSticky(false)
        setHideHeader(false)
      } else if (currentY < 300) {
        // 2. 50px dan 300px gacha pastga scroll qilinsa, header yashirinadi
        setHideHeader(true)
        setShowSticky(false)
      } else {
        // 3. 300px dan keyin, har qanday yo'nalishda, header sticky va blur bo'ladi
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
      <div className="mx-auto py-8 px-36">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/images/logo.svg"
                alt="Hubfolio"
                width={32}
                height={32}
              />
            </div>
            <span className="text-xl font-medium">Hubfolio</span>
            <sup className="text-xs">®</sup>
          </Link>
          {/* Navigation */}
          <nav className="rounded-full bg-[#1C1C1C] px-8 py-4">
            <ul className="flex gap-12">
              <li>
                <Link
                  href="/"
                  className="text-sm transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="text-sm transition-colors hover:text-white"
                >
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-sm transition-colors hover:text-white"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm transition-colors hover:text-white"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>
          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="/start-project"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-colors hover:bg-gray-100"
            >
              <span className="text-sm font-medium">Start Project</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#333] transition-colors hover:bg-white hover:text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
