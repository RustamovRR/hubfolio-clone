import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-8 bg-[#111] border-t border-[#222]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-3xl font-bold">
              h.
            </Link>
            <div className="text-sm text-[#666]">
              © 2024 Hubfolio Agency.
              <br />
              All Right Reserved
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-12">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="hover:text-white transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="hover:text-white transition-colors"
                >
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
