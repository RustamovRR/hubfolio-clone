import Link from 'next/link'

export const NewsletterSection = () => {
  const items = [
    {
      title: 'Work Inquiry',
      desc1: 'contact@hubfolio.agency',
      desc2: '+0685689696',
    },
    {
      title: 'Open Position',
      desc1: 'Senior Front-end Wordpress Developer',
      desc2: 'UI/UX Designer (Remote)',
    },
    {
      title: 'Mahattan, NY',
      desc1: '152 Thatcher Road St, Mahattan NY',
      desc2: '10463 United States',
    },
    {
      title: 'Links',
      desc1: 'Terms & Conditions',
      desc2: 'Privacy Policy',
    },
  ]
  return (
    <div className="container mx-auto py-32">
      <div className="flex justify-between gap-8 max-lg:flex-col max-lg:px-4">
        {/* Newsletter Form */}
        <div className="col-span-4 max-lg:w-full">
          <div className="w-3/5 max-lg:w-full">
            <h2 className="mb-12 text-2xl font-medium max-lg:w-3/5 max-sm:w-full">
              Be the first to get the latest news about trends, inspiration &
              more
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-none border-none bg-[#222] px-6 py-4 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 right-4 -translate-y-1/2"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#666]">
                By subscribing, you're accept our{' '}
                <Link href="/privacy" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="flex w-3/5 max-lg:mt-6 max-lg:w-full">
          <div className="max-xs:grid-cols-1 col-span-2 grid w-full grid-cols-2 justify-between space-y-10">
            {items.map((item, index) => (
              <div key={index} className="w-full">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-sm">{item.desc1}</p>
                  <p className="text-sm">{item.desc2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
