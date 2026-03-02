'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import galleryData from '@/data/gallery.json'

const categories = ['Tümü', 'ATV Safari', 'UTV Safari', 'At Turu', 'Manzara']

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filtered =
    activeCategory === 'Tümü'
      ? galleryData.slice(0, 6)
      : galleryData.filter((item) => item.category === activeCategory).slice(0, 6)

  return (
    <section className="py-20 bg-white" id="galeri">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase mb-2 text-sm">Galeri</h2>
            <h3 className="text-4xl font-display font-bold text-forest">
              Anılarınızı Ölümsüzleştirin
            </h3>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-forest text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
          {filtered.length > 0 && (
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={filtered[0].src}
                alt={filtered[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">{filtered[0].title}</p>
              </div>
            </div>
          )}
          {filtered.slice(1, 3).map((item) => (
            <div key={item.id} className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
          {filtered[3] && (
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={filtered[3].src}
                alt={filtered[3].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold">{filtered[3].title}</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            Tüm Fotoğrafları Gör
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
