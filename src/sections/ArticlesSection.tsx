'use client'

import { ArticleCard } from '@/components'
import { IArticle } from '@/types'
import { ChevronRight } from 'lucide-react'

const articles: IArticle[] = [
  {
    id: 1,
    category: 'Experience',
    date: 'May 15, 2024',
    title: 'How to build work culture for young office?',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/blog/1.jpg',
  },
  {
    id: 2,
    category: 'Design Trends',
    date: 'May 1, 2024',
    title: 'Hubfolio - Winner SOTY at CSS Winner 2023 with Zumar project',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/blog/2.jpg',
  },
  {
    id: 3,
    category: 'Tips & Tricks',
    date: 'April 24, 2024',
    title: 'Rebrand vs Refesh: 10 Minutes On Brand by Hubfolio',
    image:
      'https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/blog/3.jpg',
  },
]

export const ArticlesSection = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-16 flex items-center justify-between max-lg:items-start max-sm:flex-col">
          <h2 className="text-6xl font-medium">Our Articles</h2>
          <button className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm transition-colors hover:bg-white hover:text-black max-lg:mt-4">
            <span> See All Articles</span>
            <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </>
  )
}
