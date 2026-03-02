import siteData from '@/data/site.json'

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="size-16 bg-forest/5 text-forest rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold font-display text-forest mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
