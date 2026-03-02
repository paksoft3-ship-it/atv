'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import siteData from '@/data/site.json'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/turlar', label: 'Turlar' },
  { href: '/fiyatlar', label: 'Fiyatlar' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/konum', label: 'Konum' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Aslanbey Çiftliği"
            width={160}
            height={41}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-forest/75 hover:text-accent font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteData.phone}`}
            className="hidden lg:flex size-10 rounded-full bg-forest/10 hover:bg-forest/20 items-center justify-center text-forest transition-colors"
            aria-label="Telefon"
          >
            <span className="material-symbols-outlined">call</span>
          </a>

          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex size-10 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white items-center justify-center transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>

          <a
            href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_0_rgba(215,58,47,0.39)] hover:shadow-[0_6px_20px_rgba(215,58,47,0.23)] hover:-translate-y-0.5"
          >
            Rezervasyon
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-forest ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-forest/80 hover:text-accent font-medium text-base py-2 border-b border-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              <a
                href={`tel:${siteData.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-forest/10 hover:bg-forest/20 text-forest py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                Ara
              </a>
              <a
                href={`https://wa.me/${siteData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
