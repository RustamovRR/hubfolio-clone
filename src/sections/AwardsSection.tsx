"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Award {
  id: number;
  platform: string;
  title: string;
  date: string;
}

const awards: Award[] = [
  {
    id: 1,
    platform: "Awwwards",
    title: "SOTY 2023 - 1st Winner",
    date: "May 2023",
  },
  {
    id: 2,
    platform: "css awards",
    title: "Top 5 Best of eCommerce Websites 2022",
    date: "Dec 2022",
  },
  {
    id: 3,
    platform: "Awwwards",
    title: "Honor SOTD November, 2022r",
    date: "Nov 2022",
  },
  {
    id: 4,
    platform: "Behance Portfolio",
    title: "Winner - US Behance Portfolio Review 2021",
    date: "Aug 2021",
  },
];

export const AwardsSection = () => {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Initialize hover animations
    listRefs.current.forEach((item) => {
      if (!item) return;

      const bg = item.querySelector(".hover-bg");
      if (!bg) return;

      gsap.set(bg, {
        yPercent: 100,
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(bg, {
          yPercent: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(bg, {
          yPercent: 100,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex justify-between items-start gap-20">
          {/* Left side - Text */}
          <div className="w-2/5">
            <h6 className="text-lg mb-6">Awards & Recognition</h6>
            <h2 className="text-4xl font-medium leading-tight">
              Efforts to receive worthy rewards, awards & recognition{" "}
              <span className="text-[#999898]">help us affirm our brand.</span>
            </h2>
          </div>

          {/* Right side - Awards list */}
          <div className="flex-1">
            <div className="flex items-center text-sm text-[#999898] pb-4 border-b border-[#333]">
              <span className="w-1/2">AWARD TITLE</span>
              <span className="w-1/2 text-right">DATE</span>
            </div>
            <ul>
              {awards.map((award, index) => (
                <li
                  key={award.id}
                  ref={(el) => (listRefs.current[index] = el)}
                  className="relative overflow-hidden border-b border-[#333] cursor-pointer group"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-primary-black pointer-events-none" />

                  {/* Content */}
                  <div className="relative py-8 flex justify-between items-start">
                    <div>
                      <span className="block text-sm text-[#999898] mb-2">
                        {award.platform}
                      </span>
                      <h3 className="text-2xl font-medium group-hover:text-white transition-colors">
                        {award.title}
                      </h3>
                    </div>
                    <span className="text-sm text-[#999898]">{award.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
