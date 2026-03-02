'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import galleryData from '@/data/gallery.json'
import siteData from '@/data/site.json'

const categories = ['Tümü', 'ATV Safari', 'UTV Safari', 'At Turu', 'Manzara']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered =
    activeCategory === 'Tümü'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory)

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <div className="bg-forest py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-wood-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-3 text-sm">
            Fotoğraf Galerisi
          </h2>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
            Anılarınızı Ölümsüzleştirin
          </h1>
          <p className="text-beige/80 text-lg max-w-2xl mx-auto">
            Her karede bir macera, her manzarada bir anı. Çiftliğimizden kareler.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-forest text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-white/70">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 py-12 bg-beige/20 rounded-3xl">
          <h3 className="text-2xl font-display font-bold text-forest mb-4">
            Siz de Bu Anıları Yaşayın!
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Doğanın kalbinde, adrenalin dolu bir macera deneyimi yaşamak için hemen rezervasyon
            yapın.
          </p>
          <a
            href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            Rezervasyon Yap
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
