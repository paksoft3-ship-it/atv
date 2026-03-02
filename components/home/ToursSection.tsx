import Link from 'next/link'
import Image from 'next/image'
import toursData from '@/data/tours.json'

export default function ToursSection() {
  return (
    <section className="py-20 md:py-28 bg-beige/20" id="turlar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-3 text-sm">
            Macera Dolu Turlar
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-forest">
            Hangi Deneyimi Yaşamak İstersin?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {toursData.map((tour, index) => {
            const isFeatured = index === 1
            return (
              <div
                key={tour.id}
                className={`group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col ${
                  isFeatured
                    ? 'bg-forest relative transform md:-translate-y-4'
                    : 'bg-white border border-gray-100'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 w-full h-1 bg-accent z-10" />
                )}

                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-forest shadow-sm">
                    {tour.badge}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h4
                    className={`text-2xl font-display font-bold mb-4 ${
                      isFeatured ? 'text-white' : 'text-forest'
                    }`}
                  >
                    {tour.name}
                  </h4>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tour.features.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-center gap-3 text-sm ${
                          isFeatured ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <span className="material-symbols-outlined text-accent text-lg">
                          {feature.icon}
                        </span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/turlar/${tour.slug}`}
                    className={`w-full py-3 rounded-xl font-bold text-center transition-colors ${
                      isFeatured
                        ? 'bg-accent hover:bg-white hover:text-forest text-white'
                        : 'border-2 border-forest text-forest hover:bg-forest hover:text-white'
                    }`}
                  >
                    Detayları Gör
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
