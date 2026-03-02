import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import toursData from '@/data/tours.json'
import testimonialsData from '@/data/testimonials.json'
import siteData from '@/data/site.json'
import BookingCard from '@/components/tours/BookingCard'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return toursData.map((tour) => ({ slug: tour.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = toursData.find((t) => t.slug === params.slug)
  if (!tour) return {}
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      images: [{ url: tour.heroImage, width: 1200, height: 630, alt: tour.name }],
    },
  }
}

export default function TourDetailPage({ params }: Props) {
  const tour = toursData.find((t) => t.slug === params.slug)
  if (!tour) notFound()

  const tourReviews = testimonialsData.filter((t) => t.tour === tour.name)

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${tour.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />
          <div className="absolute inset-0 bg-forest/20" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end pb-20 px-4 md:px-20 max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold uppercase tracking-wider">
                {tour.badge}
              </span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <span className="text-white/70 text-sm">({tourReviews.length + 120}+ Değerlendirme)</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              {tour.name}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              {tour.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-forest border-b border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'schedule', label: 'Süre', value: tour.duration.join(' / ') },
              { icon: 'landscape', label: 'Zorluk', value: tour.difficulty },
              { icon: 'groups', label: 'Kontenjan', value: `Max ${tour.maxGroup} Kişi` },
              { icon: 'person_add', label: 'Yaş Sınırı', value: `${tour.minAge} Yaş` },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-white text-lg font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-20 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-16">
          {/* Description */}
          <section>
            <h2 className="text-3xl font-bold text-forest mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full" />
              Tur Hakkında
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
              {tour.description.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {tour.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                  <div>
                    <h4 className="text-forest font-bold text-sm">{highlight.title}</h4>
                    <p className="text-gray-500 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Route Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center bg-forest rounded-2xl p-6 md:p-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-white">{tour.route.title}</h3>
              <p className="text-white/75">{tour.route.description}</p>
              <ul className="space-y-2">
                {tour.route.waypoints.map((wp) => (
                  <li key={wp} className="flex items-center gap-2 text-white/75 text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                    {wp}
                  </li>
                ))}
              </ul>
            </div>
            {tour.routeImage && (
              <div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative group">
                <Image
                  src={tour.routeImage}
                  alt={`${tour.name} rotası`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}
          </section>

          {/* Safety Section */}
          <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-forest">{tour.safety.title}</h3>
              <p className="text-gray-600">{tour.safety.description}</p>
              <Link
                href="/sss"
                className="text-accent font-bold text-sm flex items-center gap-1 hover:text-forest transition-colors"
              >
                Tüm Güvenlik Prosedürlerini Oku{' '}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {tour.safetyImage && (
              <div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative border border-gray-200 shadow-sm">
                <Image
                  src={tour.safetyImage}
                  alt="Güvenlik ekipmanları"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Booking Card */}
        <div className="lg:w-[380px] shrink-0">
          <BookingCard tour={tour} siteData={siteData} />
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-forest py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Misafirlerimiz Ne Dedi?
              </h2>
              <p className="text-white/60">Son 12 ayda 500+ mutlu maceracı.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      {i < review.rating ? 'star' : 'star_border'}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-forest/10 text-forest flex items-center justify-center text-sm font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-forest font-bold text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-forest border-t border-white/10 p-4 flex items-center justify-between shadow-xl">
        <div>
          <p className="text-white/60 text-xs font-medium">Başlangıç Fiyatı</p>
          <p className="text-white font-bold text-xl">
            {tour.currency}{tour.startingPrice.toLocaleString('tr-TR')}
          </p>
        </div>
        <a
          href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(`Merhaba! ${tour.name} için rezervasyon yapmak istiyorum.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
        >
          Yerini Ayırt
        </a>
      </div>
    </div>
  )
}
