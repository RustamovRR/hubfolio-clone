"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  id: number;
  title: string;
  subtitle: string;
  value?: string;
  label?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Our Experience",
    subtitle: "We help creative agencies, designers, and other creative people to connect with potential clients.",
  },
  {
    id: 2,
    value: "12",
    label: "YEARS OF EXPERIENCE",
    title: "Our Successfully",
    subtitle: "We are a passionate team of designers and developers.",
  },
  {
    id: 3,
    value: "64",
    label: "PROJECTS COMPLETED",
    title: "Our Growth",
    subtitle: "Commitment to Innovation and Growth.",
  },
  {
    id: 4,
    value: "180",
    label: "CONVERSIONS GROWTH INCREASED",
    title: "Our Growth",
    subtitle: "Commitment to Innovation and Growth.",
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".sticky-image",
      pinSpacing: false,
    });

    // Animate content items on scroll
    experiences.forEach((_, index) => {
      const item = contentRef.current?.children[index];
      if (!item) return;

      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-10">
      <div className="mx-auto">
        <div className="flex gap-20">
          {/* Left side - Sticky Image */}
          <div className="w-1/2">
            <div className="sticky-image sticky top-0">
              <div className="relative w-full h-screen overflow-hidden">
                <Image
                  src="https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/about.jpg"
                  alt="Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Scrolling Content */}
          <div ref={contentRef} className="w-1/2 space-y-40">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <h6 className="text-lg mb-6">{exp.title}</h6>
                {exp.value && (
                  <div className="flex items-end gap-8 mb-8">
                    <span className="text-[120px] leading-none font-medium">
                      {exp.value}
                      {exp.id === 4 && "%"}
                    </span>
                    <span className="text-sm text-[#999898] mb-6 max-w-[120px]">
                      {exp.label}
                    </span>
                  </div>
                )}
                <h2 className="text-5xl font-medium leading-tight mb-4">
                  {exp.subtitle}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 