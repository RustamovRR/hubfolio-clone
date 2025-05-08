"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

gsap.registerPlugin(Draggable);

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Hubfolio studio ability to create a high quality UI stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!",
    author: "Bradley Gordon",
    position: "CEO & Founder",
    company: "Archin Studio",
    avatar: "",
  },
  {
    id: 2,
    text: "Hubfolio studio ability to create a high quality UI stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!",
    author: "Sarah Chen",
    position: "Creative Director",
    company: "Design Co",
    avatar: "",
  },
  {
    id: 3,
    text: "Hubfolio studio ability to create a high quality UI stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!",
    author: "Michael Ross",
    position: "Product Manager",
    company: "Tech Solutions",
    avatar: "",
  },
];

// Create extended array for infinite loop
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(testimonials.length); // Start from middle array
  const testimonialContentRef = useRef<HTMLDivElement>(null);
  const dragInstance = useRef<Draggable | null>(null);
  const isAnimating = useRef(false);
  const startX = useRef(0);

  const handleDotClick = (index: number) => {
    if (isAnimating.current || !testimonialContentRef.current) return;

    const realIndex = index + testimonials.length;
    const slideWidth = testimonialContentRef.current.offsetWidth;

    isAnimating.current = true;
    gsap.to(testimonialContentRef.current, {
      x: -(realIndex * slideWidth),
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        setActiveIndex(realIndex);
        isAnimating.current = false;
      },
    });
  };

  useEffect(() => {
    if (!testimonialContentRef.current) return;

    const slideWidth = testimonialContentRef.current.offsetWidth;

    // Set initial position
    gsap.set(testimonialContentRef.current, {
      x: -(activeIndex * slideWidth),
    });

    dragInstance.current = Draggable.create(testimonialContentRef.current, {
      type: "x",
      inertia: true,
      onDragStart: function () {
        if (isAnimating.current) {
          this.endDrag();
          return;
        }
        startX.current = this.x;
      },
      onDrag: function () {
        const currentX = this.x;
        const totalWidth = slideWidth * testimonials.length;

        if (currentX < -(totalWidth * 2)) {
          this.x += totalWidth;
          startX.current += totalWidth;
        } else if (currentX > -totalWidth) {
          this.x -= totalWidth;
          startX.current -= totalWidth;
        }
      },
      onDragEnd: function () {
        const movement = this.x - startX.current;
        const threshold = 50;
        const currentPosition = Math.abs(this.x);
        const currentIndex = Math.round(currentPosition / slideWidth);
        let targetIndex = currentIndex;

        if (Math.abs(movement) > threshold) {
          targetIndex = movement > 0 ? currentIndex - 1 : currentIndex + 1;
        }

        isAnimating.current = true;

        gsap.to(testimonialContentRef.current, {
          x: -(targetIndex * slideWidth),
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            setActiveIndex(targetIndex);
            isAnimating.current = false;

            if (targetIndex >= testimonials.length * 2) {
              gsap.set(testimonialContentRef.current, {
                x: -(testimonials.length * slideWidth),
              });
              setActiveIndex(testimonials.length);
            } else if (targetIndex < testimonials.length) {
              gsap.set(testimonialContentRef.current, {
                x: -(testimonials.length * 2 * slideWidth),
              });
              setActiveIndex(testimonials.length * 2);
            }
          },
        });
      },
    })[0];

    return () => {
      if (dragInstance.current) {
        dragInstance.current.kill();
      }
    };
  }, [activeIndex]);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="bg-primary-blue rounded-2xl p-12 flex justify-between h-[571px] gap-40">
          {/* Left side with quote icon */}
          <div className="mt-10">
            <div className="rounded-full relative flex items-center justify-center">
              <Image
                src="/vector-circle-text.svg"
                width={240}
                height={240}
                alt=""
              />
              <Image
                src="/vector-quote.svg"
                width={100}
                height={77}
                alt=""
                className="absolute"
              />
            </div>
          </div>

          {/* Right side with draggable carousel */}
          <div className="w-[55%] overflow-hidden flex items-center">
            <div className="w-full relative">
              <div
                ref={testimonialContentRef}
                className="flex cursor-grab active:cursor-grabbing"
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="w-full shrink-0 flex justify-center"
                  >
                    <div className="w-[90%]">
                      <p className="text-4xl font-medium text-white mb-8">
                        {testimonial.text}
                      </p>

                      <hr className="border-white/20 my-8" />

                      <div className="flex items-center">
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                            {testimonial.avatar && (
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">
                              {testimonial.author}
                            </h4>
                            <p className="text-white/70">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation dots - now positioned absolutely */}
              <div className="absolute bottom-0 right-[calc(50%-250px)] flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex % testimonials.length
                        ? "bg-white"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
