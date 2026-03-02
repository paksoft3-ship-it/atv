import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import toursData from '@/data/tours.json'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: 'Turlarımız - ATV Safari, UTV Turu, At Biniciliği',
  description:
    "Aslanbey Çiftliği'nde sunduğumuz tüm turlar: ATV Safari, UTV Turu ve At Biniciliği. Profesyonel rehberler eşliğinde doğanın kalbinde macera.",
}

const comparisonData = [
  { label: 'Deneyim Türü', values: ['Aksiyon & Adrenalin', 'Konforlu Gezi', 'Sakin & Doğal'] },
  { label: 'Kişi Sayısı', values: ['Tek Kişilik', '4 Kişiye Kadar', 'Bireysel'] },
  {
    label: 'Zorluk',
    values: ['Orta - Zor', 'Kolay', 'Başlangıç'],
    colors: ['text-yellow-500', 'text-green-400', 'text-blue-300'],
  },
  { label: 'Süre', values: ['30/60 Dk', '45/60 Dk', '60 Dk'] },
  { label: 'Kıyafet', values: ['Kirlenmeye müsait', 'Rahat spor', 'Uzun pantolon'] },
]

export default function ToursPage() {
  return (
    <div className="bg-forest min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-end justify-center pb-12">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjHBw2-SGI717wPPX_lVZ9xyIw-WHjU0NW8bJje90EWcThMQYdudfKfYxDk3mQms2Jld4MFVDrtJnOCmSKfA_1aGIdgykwvlAH17EVJIgp4cJkTMq7xbejzR3NOUfEBts5ivT6iNDC6nFKTO44pP8-KatAbVJB2EbfYK4gKFY968t0FJX7yIwyspid7jf0urMgN1RQ9Jq894O9fn5ZC_6ZVpJHoFuZFepylbnOmWlaKyaPM1Sil3FcwCCh9nHHh2JiWaZLTlIJKXc"
            alt="Turlarımız - Aslanbey Çiftliği"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            Keşfetmeye Hazır Mısın?
          </span>
          <h1 className="text-white font-display text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-xl">
            Turlarımız
          </h1>
          <p className="text-beige text-lg max-w-2xl mx-auto font-medium">
            Doğanın kalbinde, adrenalini ve huzuru bir arada yaşayacağınız unutulmaz deneyimler.
          </p>
        </div>
      </div>

      {/* Tours */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-16 flex flex-col gap-16">
        {toursData.map((tour, index) => {
          const isReversed = index % 2 !== 0
          return (
            <div key={tour.id}>
              <section
                className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
              >
                <div
                  className={`relative group overflow-hidden rounded-2xl shadow-2xl ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    width={700}
                    height={400}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tour.badge}
                  </div>
                </div>

                <div className={`flex flex-col gap-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-accent text-3xl">
                        {tour.icon}
                      </span>
                      <h2 className="text-white font-display text-4xl font-bold">{tour.name}</h2>
                    </div>
                    <p className="text-beige/80 text-lg leading-relaxed">{tour.shortDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: 'Zorluk Seviyesi',
                        value: tour.difficulty,
                        icon: 'star',
                      },
                      {
                        label: 'Süre Seçenekleri',
                        value: tour.duration.join(' / '),
                        icon: 'schedule',
                      },
                      {
                        label: 'Kişi Kapasitesi',
                        value: tour.capacity,
                        icon: 'person',
                      },
                      {
                        label: 'Önerilen',
                        value: tour.recommended,
                        icon: 'bolt',
                      },
                    ].map((info) => (
                      <div
                        key={info.label}
                        className="bg-[#2A4B3C] p-4 rounded-xl border border-[#3E6352]"
                      >
                        <span className="text-beige/60 text-sm block mb-1">{info.label}</span>
                        <div className="flex items-center gap-1 text-white font-semibold text-sm">
                          <span className="material-symbols-outlined text-accent text-sm">
                            {info.icon}
                          </span>
                          {info.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <a
                      href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(`Merhaba! ${tour.name} için rezervasyon yapmak istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[160px] flex items-center justify-center rounded-lg h-12 px-6 bg-accent hover:bg-red-700 transition-colors text-white font-bold tracking-wide shadow-lg"
                    >
                      Rezervasyon Yap
                    </a>
                    <a
                      href={`https://wa.me/${siteData.whatsapp}?text=Merhaba!%20${encodeURIComponent(tour.name)}%20hakkında%20bilgi%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[160px] flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-[#25D366] hover:bg-[#20bd5a] transition-colors text-white font-bold tracking-wide shadow-lg"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <Link
                    href={`/turlar/${tour.slug}`}
                    className="text-accent hover:text-white transition-colors text-sm font-bold flex items-center gap-1"
                  >
                    Detayları Gör <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </section>

              {index < toursData.length - 1 && (
                <div className="mt-16 w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-earth to-transparent" />
              )}
            </div>
          )
        })}

        {/* Comparison Table */}
        <section className="w-full mt-12 mb-12">
          <h3 className="text-white text-3xl font-display font-bold text-center mb-8">
            Hangi Tur Size Uygun?
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#3E6352] shadow-2xl bg-[#2A4B3C]/50">
            <table className="w-full text-left text-sm text-beige/80">
              <thead className="text-xs uppercase bg-forest text-white">
                <tr>
                  <th className="px-6 py-4 font-display font-bold text-base tracking-wider" scope="col">
                    Özellikler
                  </th>
                  {toursData.map((tour) => (
                    <th
                      key={tour.id}
                      className="px-6 py-4 font-display font-bold text-base tracking-wider text-accent"
                      scope="col"
                    >
                      {tour.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3E6352]">
                {comparisonData.map((row) => (
                  <tr key={row.label} className="hover:bg-[#2A4B3C] transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className={`px-6 py-4 ${row.colors ? row.colors[i] + ' font-bold' : ''}`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
