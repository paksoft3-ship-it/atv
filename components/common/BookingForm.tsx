'use client'

import { useState } from 'react'
import siteData from '@/data/site.json'

const tourLabels: Record<string, string> = {
  'atv-1h': 'ATV Safari (1 Saat)',
  'atv-30m': 'ATV Safari (30 Dakika)',
  'utv': 'UTV Safari',
  'horse': 'At Biniciliği',
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: '',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXXX/FORM_SUBMIT_LABEL',
        event_category: 'Lead',
        event_label: 'Booking Form',
        value: 1,
      })
    }

    const message = [
      '🌿 *YENİ REZERVASYon TALEBİ*',
      `👤 Ad Soyad: ${formData.name}`,
      `📞 Telefon: ${formData.phone}`,
      formData.email ? `📧 E-posta: ${formData.email}` : null,
      `🏍️ Tur: ${tourLabels[formData.tour] || formData.tour}`,
      `📅 Tarih: ${formData.date}`,
      formData.notes ? `📝 Notlar: ${formData.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-beige rounded-3xl p-8 md:p-10 shadow-2xl text-center">
        <span className="material-symbols-outlined text-6xl text-forest mb-4 block">
          check_circle
        </span>
        <h3 className="text-forest font-extrabold text-2xl md:text-3xl mb-2">
          WhatsApp Açıldı!
        </h3>
        <p className="text-forest/80 font-medium">
          Mesajınızı WhatsApp&apos;tan göndererek rezervasyonunuzu tamamlayın. Size en kısa sürede
          dönüş yapacağız!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-beige rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="relative z-10">
        <h3 className="text-forest font-extrabold text-2xl md:text-3xl mb-2 font-display">
          Rezervasyon Formu
        </h3>
        <p className="text-forest/80 mb-8 font-medium">
          Formu doldurun, maceranızı planlamak için sizi hemen arayalım.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-forest font-bold text-sm ml-1">Adınız Soyadınız</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-forest/40 material-symbols-outlined">
                  person
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/50 border-0 border-b-2 border-forest/20 focus:border-accent focus:ring-0 rounded-lg py-3 pl-11 pr-4 text-forest placeholder-forest/40 font-medium transition-all hover:bg-white/80"
                  placeholder="Ahmet Yılmaz"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-forest font-bold text-sm ml-1">Telefon Numarası</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-forest/40 material-symbols-outlined">
                  phone_iphone
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/50 border-0 border-b-2 border-forest/20 focus:border-accent focus:ring-0 rounded-lg py-3 pl-11 pr-4 text-forest placeholder-forest/40 font-medium transition-all hover:bg-white/80"
                  placeholder="0555 123 45 67"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-forest font-bold text-sm ml-1">E-posta Adresi</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-forest/40 material-symbols-outlined">
                mail
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/50 border-0 border-b-2 border-forest/20 focus:border-accent focus:ring-0 rounded-lg py-3 pl-11 pr-4 text-forest placeholder-forest/40 font-medium transition-all hover:bg-white/80"
                placeholder="ahmet@ornek.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-forest font-bold text-sm ml-1">Tur Seçimi</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-forest/40 material-symbols-outlined">
                  terrain
                </span>
                <select
                  name="tour"
                  required
                  value={formData.tour}
                  onChange={handleChange}
                  className="w-full bg-white/50 border-0 border-b-2 border-forest/20 focus:border-accent focus:ring-0 rounded-lg py-3 pl-11 pr-8 text-forest font-medium transition-all hover:bg-white/80 appearance-none cursor-pointer"
                >
                  <option value="">Seçiniz</option>
                  <option value="atv-1h">ATV Safari (1 Saat)</option>
                  <option value="atv-30m">ATV Safari (30 Dakika)</option>
                  <option value="utv">UTV Safari</option>
                  <option value="horse">At Biniciliği</option>
                </select>
                <span className="absolute right-3 top-3.5 text-forest/40 material-symbols-outlined pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-forest font-bold text-sm ml-1">Tarih</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-forest/40 material-symbols-outlined">
                  calendar_month
                </span>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white/50 border-0 border-b-2 border-forest/20 focus:border-accent focus:ring-0 rounded-lg py-3 pl-11 pr-4 text-forest font-medium transition-all hover:bg-white/80 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-forest font-bold text-sm ml-1">Notlarınız (Opsiyonel)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full bg-white/50 border-0 border-b-2 border-forest/20 focus:border-accent focus:ring-0 rounded-lg py-3 px-4 text-forest placeholder-forest/40 font-medium transition-all hover:bg-white/80 resize-none"
              placeholder="Özel bir isteğiniz var mı?"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-accent/30 transform transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 mt-4 group"
          >
            <span className="text-lg">WhatsApp ile Rezervasyon Yap</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              send
            </span>
          </button>

          <p className="text-center text-forest/60 text-xs mt-4">
            *Rezervasyonunuzu WhatsApp üzerinden onaylamak için mesajınızı gönderin.
          </p>
        </form>
      </div>
    </div>
  )
}
