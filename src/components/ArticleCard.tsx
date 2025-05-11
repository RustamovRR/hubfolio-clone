import { IArticle } from '@/types'
import Image from 'next/image'
import React, { FC } from 'react'

const ArticleCard: FC<IArticle> = ({ id, category, date, image, title }) => {
  return (
    <article
      key={id}
      className="group border-t border-white/15 pt-10 max-lg:w-full"
    >
      {/* Content */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-4 text-sm text-[#999898]">
          <span>{category}</span>
          <span>/</span>
          <span>{date}</span>
        </div>
        <h3 className="text-2xl leading-tight font-medium">{title}</h3>
      </div>

      {/* Image */}
      <div className="relative h-[300px] overflow-hidden lg:max-w-[410px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </article>
  )
}

export default ArticleCard
