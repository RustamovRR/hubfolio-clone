"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { 
  MarqueeSection, 
  OurServicesSection, 
  FeaturedWorksSection,
  PartnersSection,
  TestimonialsSection,
  AwardsSection,
  ExperienceSection
} from "@/sections";

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
      });

      // Text animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Scroll animations
      gsap.utils
        .toArray<HTMLElement>(".animate-on-scroll")
        .forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          });
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section className="flex items-center p-10">
        <h1 className="text-[120px] leading-[1.2] flex-1 font-medium">
          Marketing <br /> & SEO studio
        </h1>
        <div className="w-2/5">
          <p>
            Connecting businesses with their audiences, and individuals with
            their dreams. Our path forward is one of continuous growth
          </p>
        </div>
      </section>

      <section className="h-[600px] mt-20 relative">
        <Image
          src={
            "https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/header/bg1.jpg"
          }
          alt=""
          width={1000}
          height={600}
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute z-10 bottom-0 right-0 hubfolio-text">
          HUBFOLIO
        </div>
      </section>

      <section className="flex items-start p-10 px-16 mt-10">
        <div className="w-2/5">
          <h6 className="blend_of_simplicity uppercase relative">
            the blend of simplicity and innovation
          </h6>
        </div>
        <div className="flex-1">
          <h3 className="text-[40px] font-medium">
            <span className="text-[#999898]">Welcome to Hubfolio</span> — your
            reliable and friendly AI companion designed to make your daily life
            simpler and more enjoyable in this fast-paced world.
          </h3>
        </div>
      </section>

      <section className="p-10 px-16 mt-20" ref={servicesRef}>
        <OurServicesSection />
      </section>

      <section
        className="relative mt-20 mb-40 h-[300px] overflow-hidden bg-black"
        ref={marqueeRef}
      >
        <MarqueeSection />
      </section>

      <section className="py-10 mt-20" ref={worksRef}>
        <FeaturedWorksSection />
      </section>

      <section className="py-10">
        <PartnersSection />
      </section>

      <section className="py-10">
        <TestimonialsSection />
      </section>

      <section className="py-10">
        <AwardsSection />
      </section>

      <section className="py-10">
        <ExperienceSection />
      </section>
    </div>
  );
}
