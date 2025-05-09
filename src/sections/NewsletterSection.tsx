import Link from "next/link";

export const NewsletterSection = () => {
  return (
    <section className="py-32 bg-[#111]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Newsletter Form */}
          <div className="col-span-4">
            <h2 className="text-4xl font-medium mb-12">
              Be the first to get the latest news about trends, inspiration & more
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-[#222] border-none px-6 py-4 rounded-none focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#666]">
                By subscribing, you're accept our{" "}
                <Link href="/privacy" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>

          {/* Work Inquiry */}
          <div className="col-span-4">
            <h3 className="text-2xl font-medium mb-8">Work Inquiry</h3>
            <div className="space-y-4">
              <p>contact@hubfolio.agency</p>
              <p>+0685689696</p>
            </div>
          </div>

          {/* Open Position */}
          <div className="col-span-4">
            <h3 className="text-2xl font-medium mb-8">Open Position</h3>
            <div className="space-y-4">
              <p>Senior Front-end Wordpress Developer</p>
              <p>UI/UX Designer (Remote)</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-12 gap-8 mt-20">
          <div className="col-span-4">
            <h3 className="text-2xl font-medium mb-8">Mahattan, NY</h3>
            <p>152 Thatcher Road St, Mahattan NY</p>
            <p>10463 United States</p>
          </div>

          <div className="col-span-4 col-start-9">
            <h3 className="text-2xl font-medium mb-8">Links</h3>
            <div className="space-y-4">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 