'use client'

import { useState } from 'react'
import faqData from '@/data/faq.json'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-bold text-forest">{question}</span>
        <span
          className={`material-symbols-outlined transition-transform text-gray-400 ${open ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{answer}</div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const displayed = faqData.slice(0, 5)

  return (
    <section className="py-20 bg-surface" id="sss">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-3 text-sm">
            Merak Edilenler
          </h2>
          <h3 className="text-3xl font-display font-bold text-forest">Sıkça Sorulan Sorular</h3>
        </div>

        <div className="space-y-4">
          {displayed.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
