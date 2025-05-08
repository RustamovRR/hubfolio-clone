"use client";

import Image from "next/image";

interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: "Experience",
    date: "May 15, 2024",
    title: "How to build work culture for young office?",
    image: "https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/blog/1.jpg",
  },
  {
    id: 2,
    category: "Design Trends",
    date: "May 1, 2024",
    title: "Hubfolio - Winner SOTY at CSS Winner 2023 with Zumar project",
    image: "https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/blog/2.jpg",
  },
  {
    id: 3,
    category: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Rebrand vs Refesh: 10 Minutes On Brand by Hubfolio",
    image: "https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/blog/3.jpg",
  },
];

export const ArticlesSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-6xl font-medium">Our Articles</h2>
          <button className="px-8 py-4 rounded-full border border-[#333] text-sm hover:bg-white hover:text-black transition-colors">
            See All Articles
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              {/* Content */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-sm text-[#999898]">
                  <span>{article.category}</span>
                  <span>/</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-medium leading-tight">
                  {article.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative w-[410px] h-[300px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 