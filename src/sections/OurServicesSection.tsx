"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Branding",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    icon: "/crown-solid.svg",
  },
  {
    id: 2,
    title: "Design",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    icon: "/chart-line-solid.svg",
  },
  {
    id: 3,
    title: "Code",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    icon: "/code-solid.svg",
  },
  {
    id: 4,
    title: "Growth",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    icon: "/bezier-curve-solid.svg",
  },
];

const OurServicesSection = () => {
  useEffect(() => {
    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach((item) => {
      const title = item.querySelector(".service-title");
      const contentWrapper = item.querySelector(".service-content-wrapper");
      const content = item.querySelector(".service-content");
      const icon = item.querySelector(".service-icon");

      // Set initial states
      gsap.set(item, {
        height: "120px", // Initial height
        overflow: "hidden",
      });

      gsap.set(contentWrapper, {
        y: -20, // Slightly move up initially
      });

      gsap.set(title, {
        opacity: 0.4,
        y: 20, // Move down initially
      });

      // Create hover animation timeline
      const tl = gsap.timeline({ paused: true });

      tl.to(item, {
        height: "150px", // Expanded height
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          contentWrapper,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          icon,
          {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Add hover event listeners
      item.addEventListener("mouseenter", () => {
        tl.play();
      });

      item.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });
  }, []);

  return (
    <>
      {/* Title and Button */}
      <div className="flex justify-between items-center mb-32">
        <h2 className="text-[80px] font-medium">Our Services</h2>
        <button className="border border-white rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
          See Our Approach
        </button>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-item flex items-center justify-between py-10 border-t ${
              index === services.length - 1 ? "border-b" : ""
            } border-[#333] group cursor-none bg-black`}
          >
            <h3 className="service-title text-[80px] font-medium">
              {service.title}
            </h3>
            <div className="service-content-wrapper flex items-center gap-10">
              <div className="service-content w-[300px]">
                <p className="text-lg text-[#999898]">{service.description}</p>
              </div>
              <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center border border-white">
                <Image src={service.icon} alt="" width={30} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurServicesSection;
