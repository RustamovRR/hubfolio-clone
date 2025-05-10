import { NAVIGATION_DATA } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-theme-color border-t border-[#222] px-36 py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-10">
            <Link href="/" className="text-3xl font-bold">
              <Image src="/logo.svg" alt="logo" width={25} height={25} />
            </Link>
            <div className="text-sm">
              © 2024 Hubfolio Agency.
              <br />
              All Right Reserved
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-12">
              {NAVIGATION_DATA.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
