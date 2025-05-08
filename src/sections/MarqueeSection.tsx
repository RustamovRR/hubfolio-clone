'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const marqueeItems = [
  'TOP-NOTCH EXPERTS',
  'DEDICATED SUPPORT 24/7',
  'FLEXIBLE PRICING',
  'AI-DRIVEN SOLUTIONS'
];

 const MarqueeSection = () => {
  const topRibbonRef = useRef<HTMLDivElement>(null);
  const bottomRibbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topRibbon = topRibbonRef.current;
    const bottomRibbon = bottomRibbonRef.current;

    if (!topRibbon || !bottomRibbon) return;

    // Clone items for seamless loop
    const topContent = topRibbon.querySelector('.marquee-content');
    const bottomContent = bottomRibbon.querySelector('.marquee-content');

    if (topContent && bottomContent) {
      topContent.innerHTML += topContent.innerHTML;
      bottomContent.innerHTML += bottomContent.innerHTML;
    }

    // Top ribbon animation
    gsap.to(topContent, {
      x: '-50%',
      duration: 20,
      ease: 'none',
      repeat: Infinity
    });

    // Bottom ribbon animation (slightly slower)
    gsap.to(bottomContent, {
      x: '50%',
      duration: 20,
      ease: 'none',
      repeat: Infinity
    });
  }, []);

  return (
    <>
      {/* Top Ribbon */}
      <div
        ref={topRibbonRef}
        className="absolute w-full py-8 bg-primary-blue transform rotate-[3deg] translate-y-20 z-10"
        style={{
          transformOrigin: 'left center',
        }}
      >
        <div className="marquee-content flex whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-8 mx-8 text-2xl font-medium"
            >
              <span className="w-3 h-3 bg-white rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div
        ref={bottomRibbonRef}
        className="absolute w-full py-8 bg-primary-black transform -rotate-[3deg] translate-y-32"
        style={{
          transformOrigin: 'right center',
        }}
      >
        <div className="marquee-content flex whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-8 mx-8 text-2xl font-medium"
            >
              <span className="w-3 h-3 bg-white rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}; 

export default MarqueeSection