'use client'

import { useState } from 'react'

interface Tour {
  startingPrice: number
  currency: string
  priceNote: string
  discount: string | null
  timeSlots: string[]
  name: string
}

interface SiteData {
  whatsapp: string
  phone: string
}

export default function BookingCard({ tour, siteData }: { tour: Tour; siteData: SiteData }) {
  const [persons, setPersons] = useState(2)
  const [date, setDate] = useState('')
  const [timeSlot, setTimeSlot] = useState(tour.timeSlots[0] || '')

  const buildWhatsAppUrl = () => {
    const message = [
      '🌿 *YENİ REZERVASYon TALEBİ*',
      `🏍️ Tur: ${tour.name}`,
      date ? `📅 Tarih: ${date}` : null,
      timeSlot ? `🕐 Saat: ${timeSlot}` : null,
      `👥 Kişi Sayısı: ${persons} Yetişkin`,
    ]
      .filter(Boolean)
      .join('\n')
    return `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`
  }

  const handleConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXXX/BOOKING_CARD_LABEL',
        event_category: 'Booking',
        event_label: `Tour Detail - ${tour.name}`,
        value: tour.startingPrice,
      })
    }
  }

  return (
    <div className="sticky top-24 bg-[#1a3320] border border-[#23482c] rounded-2xl p-6 shadow-2xl">
      <div className="flex justify-between items-end mb-6 border-b border-[#23482c] pb-6">
        <div>
          <p className="text-slate-400 text-sm mb-1">Başlangıç Fiyatı</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {tour.currency}{tour.startingPrice.toLocaleString('tr-TR')}
            </span>
            <span className="text-sm text-slate-400">/ {tour.priceNote}</span>
          </div>
        </div>
        {tour.discount && (
          <div className="bg-accent/20 text-accent px-3 py-1 rounded text-xs font-bold">
            {tour.discount}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Tarih Seçin</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#112215] border border-[#23482c] text-white rounded-lg p-3 focus:ring-accent focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Saat</label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full bg-[#112215] border border-[#23482c] text-white rounded-lg p-3 focus:ring-accent focus:border-accent"
          >
            {tour.timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Kişi Sayısı</label>
          <div className="flex items-center justify-between bg-[#112215] border border-[#23482c] rounded-lg p-1">
            <button
              type="button"
              onClick={() => setPersons(Math.max(1, persons - 1))}
              className="size-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#23482c] rounded transition-colors"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="text-white font-bold">
              {persons} {persons === 1 ? 'Yetişkin' : 'Yetişkin'}
            </span>
            <button
              type="button"
              onClick={() => setPersons(persons + 1)}
              className="size-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#23482c] rounded transition-colors"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>

        <div className="pt-4">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConversion}
            className="w-full bg-accent hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          >
            <span>Hemen Yer Ayırt</span>
            <span className="material-symbols-outlined text-xl">send</span>
          </a>
          <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">chat</span>
            WhatsApp üzerinden anında yanıt alın.
          </p>
        </div>
      </div>

      {/* WhatsApp Support */}
      <div className="mt-6 pt-6 border-t border-[#23482c]">
        <h5 className="text-white font-medium mb-3 text-sm">Sorularınız mı var?</h5>
        <a
          href={`https://wa.me/${siteData.whatsapp}?text=Merhaba!%20${encodeURIComponent(tour.name)}%20hakkında%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors p-3 rounded-lg border border-[#23482c] hover:border-accent/50 bg-[#112215]"
        >
          <div className="bg-accent/10 rounded-full p-2">
            <span className="material-symbols-outlined text-accent text-xl">chat</span>
          </div>
          <div className="text-sm">
            <span className="block text-xs text-slate-500">WhatsApp Destek</span>
            {siteData.phone}
          </div>
        </a>
      </div>
    </div>
  )
}
