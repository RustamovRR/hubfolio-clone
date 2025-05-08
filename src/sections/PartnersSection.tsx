"use client";

import { useEffect } from "react";

export const PartnersSection = () => {
  useEffect(() => {
    // Add hover animations later if needed
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Header */}
        <h3 className="text-lg mb-16">partner with +150 brands</h3>

        {/* Partner logos */}
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="w-[200px] h-[120px] rounded-full border border-[#333] flex items-center justify-center transition-colors hover:border-white cursor-pointer"
            >
              {/* Icon placeholder - you'll add icons later */}
              <div className="w-12 h-12 bg-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
