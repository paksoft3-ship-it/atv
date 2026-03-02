import testimonialsData from '@/data/testimonials.json'
import siteData from '@/data/site.json'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-sm">
          {i < rating ? 'star' : 'star_border'}
        </span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const displayed = testimonialsData.slice(0, 4)

  return (
    <section className="py-20 bg-beige/20 border-y border-beige/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-display font-bold text-forest mb-4">
              Maceraperestler Ne Diyor?
            </h2>
            <p className="text-gray-600 mb-6">
              Binlerce mutlu müşteri ve unutulmaz anılar. Siz de maceraya katılın, deneyimlerinizi
              paylaşın.
            </p>
            <a
              href={siteData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-accent hover:underline"
            >
              <span className="material-symbols-outlined">photo_camera</span>
              @aslanbeyciftligi&apos;ni Takip Et
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayed.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 italic text-sm mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                    {testimonial.initials}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-forest">{testimonial.name}</span>
                    {testimonial.tour && (
                      <p className="text-xs text-gray-400">{testimonial.tour}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
