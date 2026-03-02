import siteData from '@/data/site.json'

export default function LocationSection() {
  return (
    <section className="py-20 bg-white" id="konum">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Neredeyiz?</h2>
            <h3 className="text-4xl font-display font-bold text-forest">
              Pendik&apos;in Doğal Cenneti
            </h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul&apos;un gürültüsünden uzak ama şehre bir o kadar yakın. Kurna Köyü
              mevkiinde, doğanın kalbindeyiz.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'local_parking', text: 'Otopark Var' },
                { icon: 'family_restroom', text: 'Aileye Uygun' },
                { icon: 'event_available', text: 'Rezervasyon Gerekli', color: 'accent' },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    tag.color === 'accent'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-forest/5 text-forest'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{tag.icon}</span>
                  {tag.text}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-accent text-2xl">location_on</span>
                <div>
                  <h5 className="font-bold text-forest">Adres</h5>
                  <p className="text-gray-500 text-sm">{siteData.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-accent text-2xl">call</span>
                <div>
                  <h5 className="font-bold text-forest">Telefon</h5>
                  <a
                    href={`tel:${siteData.phone}`}
                    className="text-gray-500 text-sm hover:text-accent transition-colors"
                  >
                    {siteData.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent text-2xl">schedule</span>
                <div>
                  <h5 className="font-bold text-forest">Çalışma Saatleri</h5>
                  <p className="text-gray-500 text-sm">{siteData.workingHours.weekdays}</p>
                  <p className="text-gray-500 text-sm">{siteData.workingHours.weekends}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=Pendik+Istanbul`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              <span className="material-symbols-outlined">directions</span>
              Yol Tarifi Al
            </a>
          </div>

          {/* Map */}
          <div className="h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src={siteData.mapUrl}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Aslanbey Çiftliği Konumu"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
