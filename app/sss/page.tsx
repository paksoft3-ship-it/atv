'use client'

import { useState } from 'react'
import Link from 'next/link'
import faqData from '@/data/faq.json'
import siteData from '@/data/site.json'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-bold text-forest pr-4">{question}</span>
        <span
          className={`material-symbols-outlined transition-transform text-gray-400 shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <div className="bg-forest py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-wood-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-3 text-sm">
            Merak Ettikleriniz
          </h2>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-beige/80 text-lg max-w-2xl mx-auto">
            Merak ettiğiniz her şeye cevap bulmak için doğru yerdesiniz. Bulamadığınız sorunuz için
            bizimle iletişime geçin.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-4 mb-12">
          {faqData.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="bg-forest rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Hala Sorunuz mu Var?</h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Yukarıda bulamadığınız sorularınız için bize telefon veya WhatsApp üzerinden
            ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-colors"
            >
              Rezervasyon Yap
            </a>
            <Link
              href="/iletisim"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-colors"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
