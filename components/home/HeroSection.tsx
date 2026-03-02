'use client'

import Image from 'next/image'
import { useState } from 'react'
import siteData from '@/data/site.json'

export default function HeroSection() {
  const [activity, setActivity] = useState('ATV Safari Turu')
  const [duration, setDuration] = useState('60')
  const [persons, setPersons] = useState('1 Kişi')

  const handleBooking = () => {
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXXX/CONVERSION_LABEL',
        event_category: 'Booking',
        event_label: 'Hero CTA',
      })
    }

    const message = [
      '🌿 *YENİ REZERVASYon TALEBİ*',
      `🏍️ Aktivite: ${activity}`,
      `⏱️ Süre: ${duration} Dakika`,
      `👥 Kişi: ${persons}`,
    ].join('\n')

    window.open(`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCLHLAg4F1mwe3XZzA-JIEFCHN9ENwugJqMACmgfAqI_B2Cd8jE4-af1ALvE9SNHHGdVVhExIopVe88YDW767PqVErn3oeeR07sAPsqXRGeNZy75GQ9WWzgRv_Y6vCxRcdz0Jt3Rm1kK00Jy354hRTb9ud9_dmCESXPJ6vvZjO3An45NlUi4ZZMX1akX51ZAZoudA2ZCQ2spTc7X0T_QoG-ffDmJMLS7_uaELBDks4txZMAUI0bRCOGG0F10aSzSfte17inTsXBb0"
          alt="ATV ve UTV safari - Göl kenarında macera"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8">
        {/* Badges */}
        <div className="flex gap-4 flex-wrap justify-center animate-fade-in-up">
          {[
            { icon: 'verified_user', text: 'Full Güvenlik Ekipmanı' },
            { icon: 'person_pin', text: 'Rehberli Tur' },
            { icon: 'near_me', text: "Pendik'e Yakın" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm text-accent">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-white font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl max-w-5xl">
          Göl Kenarında{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
            ATV &amp; UTV
          </span>{' '}
          Safari Heyecanı!
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md font-light">
          Doğayla iç içe, adrenalin dolu bir hafta sonu için hazır mısınız? İstanbul&apos;un yanı
          başında eşsiz bir kaçış rotası.
        </p>

        {/* Booking Widget */}
        <div className="mt-4 w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-2 md:p-3 grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="md:col-span-3 bg-gray-50 rounded-xl p-3 flex flex-col justify-center border border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase mb-1">Aktivite Seçin</span>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="bg-transparent border-none p-0 text-forest font-bold text-lg focus:ring-0 cursor-pointer"
            >
              <option>ATV Safari Turu</option>
              <option>UTV Safari Turu</option>
              <option>At Turu</option>
            </select>
          </div>

          <div className="md:col-span-3 bg-gray-50 rounded-xl p-3 flex flex-col justify-center border border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase mb-1">Süre Seç</span>
            <div className="flex gap-2">
              {['30', '60'].map((d) => (
                <label key={d} className="cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    value={d}
                    checked={duration === d}
                    onChange={() => setDuration(d)}
                    className="sr-only peer"
                  />
                  <span className="block px-3 py-1 rounded-lg border border-gray-200 text-sm font-medium text-gray-500 peer-checked:bg-forest peer-checked:text-white peer-checked:border-forest transition-colors">
                    {d} Dk
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-gray-50 rounded-xl p-3 flex flex-col justify-center border border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase mb-1">Kişi Sayısı</span>
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="bg-transparent border-none p-0 text-forest font-bold text-lg focus:ring-0 cursor-pointer"
            >
              <option>1 Kişi</option>
              <option>2 Kişi</option>
              <option>3+ Grup</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <button
              type="button"
              onClick={handleBooking}
              className="w-full h-full bg-accent hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent/20 py-4 md:py-0"
            >
              Rezervasyon Yap{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
