import type { Metadata } from 'next'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: "Konum & Ulaşım - Pendik'te Nasıl Gelinir?",
  description:
    "Aslanbey Çiftliği'ne ulaşım bilgileri. Pendik, İstanbul. Toplu taşıma ve özel araç ile yol tarifi.",
}

export default function LocationPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-forest py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-wood-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-3 text-sm">
            Bizi Bulun
          </h2>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
            Konum &amp; Ulaşım
          </h1>
          <p className="text-beige/80 text-lg max-w-2xl mx-auto">
            İstanbul&apos;un gürültüsünden uzak ama şehre bir o kadar yakın. Kurna Köyü
            mevkiinde, doğanın kalbindeyiz.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="h-[500px] relative">
        <iframe
          src={siteData.mapUrl}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Aslanbey Çiftliği Konumu"
        />
      </div>

      {/* Info Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address & Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-display font-bold text-forest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">location_on</span>
              Adres Bilgisi
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-bold text-forest mb-1">Adres</p>
                <p>{siteData.address}</p>
              </div>
              <div>
                <p className="font-bold text-forest mb-1">İlçe</p>
                <p>Pendik, İstanbul</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Pendik+Istanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-sm">directions</span>
              Google Maps&apos;te Aç
            </a>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-display font-bold text-forest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">schedule</span>
              Çalışma Saatleri
            </h3>
            <div className="space-y-3">
              {[
                { days: 'Pazartesi - Cuma', hours: '09:00 - 20:00' },
                { days: 'Cumartesi', hours: '09:00 - 22:00' },
                { days: 'Pazar', hours: '09:00 - 22:00' },
              ].map((schedule) => (
                <div
                  key={schedule.days}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-sm text-gray-600">{schedule.days}</span>
                  <span className="text-sm font-bold text-forest">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-accent/5 rounded-xl border border-accent/10">
              <p className="text-xs text-accent font-medium flex items-start gap-2">
                <span className="material-symbols-outlined text-sm shrink-0">info</span>
                Hafta sonları yoğunluk nedeniyle önceden rezervasyon önerilir.
              </p>
            </div>
          </div>

          {/* How to Get There */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-display font-bold text-forest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">commute</span>
              Nasıl Gelinir?
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: 'directions_car',
                  title: 'Özel Araç ile',
                  description: 'Pendik merkezinden yaklaşık 15 dakika. GPS ile kolayca bulunur.',
                },
                {
                  icon: 'train',
                  title: 'Marmaray ile',
                  description: "Pendik'ten bize ulaşmak için servis hattımızdan faydalanabilirsiniz.",
                },
                {
                  icon: 'local_parking',
                  title: 'Otopark',
                  description: 'Tesisimizde geniş ve ücretsiz otopark mevcuttur.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="size-10 bg-forest/5 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-forest text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-forest text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-8 bg-forest rounded-2xl p-8 text-white">
          <h3 className="text-xl font-display font-bold mb-6 text-center">Tesis Özellikleri</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'local_parking', text: 'Ücretsiz Otopark' },
              { icon: 'wc', text: 'WC & Duş' },
              { icon: 'local_cafe', text: 'Kafe & İkram' },
              { icon: 'family_restroom', text: 'Aileye Uygun' },
              { icon: 'wifi', text: 'Ücretsiz WiFi' },
              { icon: 'pets', text: 'Evcil Hayvan Dostu' },
              { icon: 'credit_card', text: 'Kart ile Ödeme' },
              { icon: 'accessibility', text: 'Erişilebilir Alan' },
            ].map((facility) => (
              <div
                key={facility.text}
                className="flex items-center gap-2 bg-white/10 rounded-xl p-3"
              >
                <span className="material-symbols-outlined text-accent text-sm">
                  {facility.icon}
                </span>
                <span className="text-sm font-medium">{facility.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
          >
            Hemen Rezervasyon Yap
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  )
}
