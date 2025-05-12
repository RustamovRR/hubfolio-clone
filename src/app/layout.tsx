'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    })

    // Cursor animation
    const cursor = document.createElement('div')
    cursor.className =
      'fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference'
    document.body.appendChild(cursor)

    const cursorFollower = document.createElement('div')
    cursorFollower.className =
      'fixed w-8 h-8 border border-white rounded-full pointer-events-none z-50 mix-blend-difference'
    document.body.appendChild(cursorFollower)

    gsap.set([cursor, cursorFollower], { xPercent: -50, yPercent: -50 })

    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      })
    })

    return () => {
      smoother.kill()
      document.body.removeChild(cursor)
      document.body.removeChild(cursorFollower)
    }
  }, [])

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} overflow-hidden antialiased`}
      >
        <LoadingScreen />
        <div id="smooth-wrapper">
          <div id="smooth-content" className="flex min-h-screen flex-col">
            <header className="sticky top-0">
              <Header />
            </header>
            <main className="flex-1">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
