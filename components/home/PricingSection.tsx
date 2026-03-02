import Link from 'next/link'
import pricingData from '@/data/pricing.json'
import siteData from '@/data/site.json'

export default function PricingSection() {
  const motorSports = pricingData.categories[0]
  const horseTour = pricingData.categories[1]

  return (
    <section className="py-20 bg-forest relative overflow-hidden" id="fiyatlar">
      <div className="absolute inset-0 bg-wood-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-beige font-bold tracking-widest uppercase mb-3 text-sm">
            Avantajlı Paketler
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            Maceranın Bedeli Paha Biçilemez
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Motor Sports */}
          <div className="bg-[#2A4A3C] rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-accent/50 transition-colors relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-white">
                {motorSports.icon}
              </span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-2">
              {motorSports.name}
            </h4>
            <p className="text-gray-400 mb-8 text-sm">{motorSports.description}</p>

            <div className="space-y-6">
              {motorSports.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <div>
                    <p className="text-white font-bold text-lg">{pkg.name}</p>
                    <p className="text-gray-400 text-xs">{pkg.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-display font-bold text-accent">
                      {pkg.price.toLocaleString('tr-TR')}₺
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(`Merhaba! ${motorSports.name} için rezervasyon yapmak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full py-3 rounded-xl bg-white/10 hover:bg-accent text-white font-bold transition-colors text-center"
            >
              Hemen Rezervasyon Yap
            </a>
          </div>

          {/* Horse Tour */}
          <div className="bg-[#6B4F2A] rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-beige/50 transition-colors relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-beige">
                {horseTour.icon}
              </span>
            </div>
            <h4 className="text-2xl font-display font-bold text-beige mb-2">{horseTour.name}</h4>
            <p className="text-white/70 mb-8 text-sm">{horseTour.description}</p>

            <div className="space-y-6">
              {horseTour.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <div>
                    <p className="text-white font-bold text-lg">{pkg.name}</p>
                    <p className="text-white/60 text-xs">{pkg.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-display font-bold text-beige">
                      {pkg.price.toLocaleString('tr-TR')}₺
                    </span>
                    {'unit' in pkg && <span className="text-xs text-white/50">/ {pkg.unit}</span>}
                  </div>
                </div>
              ))}
            </div>

            {horseTour.note && (
              <div className="bg-black/20 rounded-xl p-4 mt-4">
                <p className="text-white/80 text-sm flex items-start gap-2">
                  <span className="material-symbols-outlined text-beige text-sm mt-0.5">info</span>
                  {horseTour.note}
                </p>
              </div>
            )}

            <a
              href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(`Merhaba! ${horseTour.name} için rezervasyon yapmak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full py-3 rounded-xl bg-beige hover:bg-white text-earth font-bold transition-colors text-center"
            >
              Hemen Rezervasyon Yap
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/fiyatlar"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Tüm Fiyat Listesini Gör
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
