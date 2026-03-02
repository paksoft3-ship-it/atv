'use client'

import { useState } from 'react'
import siteData from '@/data/site.json'

const activityLabels: Record<string, string> = {
  atv: 'ATV Safari',
  utv: 'UTV Safari',
  at: 'At Turu',
}

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    activity: '',
    date: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXXX/RESERVATION_LABEL',
        event_category: 'Reservation',
        event_label: 'Form Submit',
        value: 1,
      })
    }

    const message = [
      '🌿 *YENİ REZERVASYon TALEBİ*',
      `👤 Ad Soyad: ${formData.name}`,
      `📞 Telefon: ${formData.phone}`,
      `🏍️ Aktivite: ${activityLabels[formData.activity] || formData.activity}`,
      `📅 Tarih: ${formData.date}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-forest relative overflow-hidden" id="rezervasyon">
      <div className="absolute inset-0 bg-wood-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#2A4A3C] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Hemen Yerinizi Ayırtın
            </h2>
            <p className="text-white/70">
              Formu doldurun, WhatsApp üzerinden rezervasyonunuzu tamamlayın.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-6xl text-accent mb-4 block">
                check_circle
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Açıldı!</h3>
              <p className="text-white/70">
                Mesajınızı WhatsApp&apos;tan göndererek rezervasyonunuzu tamamlayın. Size en kısa
                sürede dönüş yapacağız!
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Adınız Soyadınız"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Telefon Numaranız"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none"
                  required
                  value={formData.activity}
                  onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                >
                  <option value="" className="bg-forest">Aktivite Seçiniz</option>
                  <option value="atv" className="bg-forest">ATV Safari</option>
                  <option value="utv" className="bg-forest">UTV Safari</option>
                  <option value="at" className="bg-forest">At Turu</option>
                </select>
                <input
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Tarih"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-red-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform hover:scale-[1.01] mt-4 flex items-center justify-center gap-2"
              >
                <span>WhatsApp ile Rezervasyon Yap</span>
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
