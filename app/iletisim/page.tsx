import type { Metadata } from 'next'
import BookingForm from '@/components/common/BookingForm'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: 'İletişim & Rezervasyon - Hemen Yerinizi Ayırtın',
  description:
    "Aslanbey Çiftliği ile iletişime geçin, ATV safari ve at turu rezervasyonunuzu yapın. Telefon: +90 555 123 45 67. Pendik, İstanbul.",
}

export default function ContactPage() {
  return (
    <div className="bg-forest min-h-screen text-white">
      {/* Hero + Quick Booking Bar */}
      <div className="relative w-full bg-forest-light border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="relative container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">
                Maceraya Hazır Mısın?
              </h2>
              <p className="text-gray-300">Hemen yerini ayırt, doğanın tadını çıkar.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteData.phone}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-bold transition-colors"
              >
                <span className="material-symbols-outlined">call</span>
                {siteData.phone}
              </a>
              <a
                href={`https://wa.me/${siteData.whatsapp}?text=Merhaba!%20Rezervasyon%20yapmak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-2">
                Bize Ulaşın
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 font-display">
                İletişim Bilgileri
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Pendik ormanlarının kalbinde, unutulmaz bir macera için sorularınızı yanıtlamaya
                hazırız.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  href: `tel:${siteData.phone}`,
                  icon: 'call',
                  label: 'Telefon',
                  value: siteData.phone,
                  color: 'text-accent',
                  hoverColor: 'group-hover:bg-accent',
                },
                {
                  href: `https://wa.me/${siteData.whatsapp}`,
                  icon: 'chat',
                  label: 'WhatsApp',
                  value: 'Mesaj Gönder',
                  color: 'text-green-500',
                  hoverColor: 'group-hover:bg-green-600',
                  target: '_blank',
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.target}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:translate-x-1"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-forest flex items-center justify-center ${contact.color} ${contact.hoverColor} group-hover:text-white transition-colors`}
                  >
                    <span className="material-symbols-outlined">{contact.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                      {contact.label}
                    </p>
                    <p className="text-white font-bold text-lg">{contact.value}</p>
                  </div>
                </a>
              ))}

              {[
                {
                  icon: 'schedule',
                  color: 'text-yellow-500',
                  label: 'Çalışma Saatleri',
                  value: 'Her Gün: 09:00 - 22:00',
                },
                {
                  icon: 'pin_drop',
                  color: 'text-purple-400',
                  label: 'Adres',
                  value: siteData.address,
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center">
                    <span className={`material-symbols-outlined ${info.color}`}>{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-white font-bold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-beige hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">photo_camera</span>
                <span className="font-bold underline decoration-accent underline-offset-4">
                  @aslanbeyciftligi
                </span>{' '}
                Instagram&apos;da bizi takip edin
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </main>

      {/* Map */}
      <section className="relative w-full h-[450px] border-t border-white/10">
        <iframe
          src={siteData.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aslanbey Çiftliği Konumu"
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-forest border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col gap-3 max-w-[90%] md:max-w-xs">
          <div className="flex items-start gap-3">
            <div className="bg-accent/20 p-2 rounded-lg text-accent">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Aslanbey Çiftliği</h4>
              <p className="text-gray-400 text-xs">Pendik, İstanbul</p>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=Pendik+Istanbul`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-forest hover:bg-gray-100 font-bold text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">directions</span>
            Yol Tarifi Al
          </a>
        </div>
      </section>
    </div>
  )
}
