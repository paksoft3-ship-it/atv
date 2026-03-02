import type { Metadata } from 'next'
import Image from 'next/image'
import pricingData from '@/data/pricing.json'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: 'Fiyat Listesi - ATV Safari & At Turu Ücretleri',
  description:
    "Aslanbey Çiftliği'nde ATV safari, UTV turu ve at biniciliği fiyatları. 30 dakika 750₺'den başlayan fiyatlarla doğa macerası. Hemen rezervasyon yapın!",
}

export default function PricingPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <div className="relative min-h-[400px] flex flex-col gap-6 items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8QPpTefHlua8p_tcddXfpkp1EWHU-IxuyOwUo6-QmERTiQLFbGO4QSnMaAT-zk0Yp1N6ApyYktOfqJJJFoOxdS9O9fGksPR2Ir3e5LjcjrnWl8xfrQYMkOyvUsV7BkSOILi73EiPMYVFWRB_EWAa09INyBsbPkAC7udhhXMB3722kT9vMtckeI0BRJCA0xZsXRE53sr38qBvLhWOik-WWAO8u4v0KcRr0JBNSj16jIn1YHkSLqqHJhdeRwQGP4Jn5iudV1fOejhk"
            alt="Fiyatlar"
            fill
            className="object-cover opacity-60 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-surface" />
        </div>
        <div className="relative z-10 flex flex-col gap-3 text-center max-w-2xl">
          <span className="text-beige font-bold tracking-widest uppercase text-sm">
            Macera Seni Bekliyor
          </span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Fiyat Listesi
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mt-2">
            Pendik&apos;in kalbinde, doğayla iç içe unutulmaz anılar biriktirmeniz için en güncel
            macera paketlerimiz.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-24 -mt-10 relative z-20">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pricingData.categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-forest/30 transition-all duration-300"
            >
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-earth text-3xl">
                    {category.icon}
                  </span>
                  <h2 className="text-forest text-2xl font-bold">{category.name}</h2>
                </div>
                <p className="text-gray-500 text-sm mb-6">{category.description}</p>

                <div className="space-y-4 mb-8 flex-1">
                  {category.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`flex justify-between items-center p-4 rounded-lg border relative overflow-hidden ${
                        pkg.popular
                          ? 'bg-forest/5 border-forest/20'
                          : 'bg-surface border-gray-200'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute left-0 top-0 w-1 h-full bg-forest" />
                      )}
                      <div>
                        <span className={pkg.popular ? 'font-bold text-forest' : 'font-medium text-gray-700'}>
                          {pkg.name}
                        </span>
                        <p className="text-gray-400 text-xs">{pkg.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className={`font-black text-earth ${pkg.popular ? 'text-3xl' : 'text-2xl'}`}>
                          {pkg.price.toLocaleString('tr-TR')}₺
                        </span>
                        {'unit' in pkg && pkg.unit && (
                          <p className="text-gray-400 text-xs">/ {pkg.unit}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {category.includes && (
                  <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                    {category.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-forest text-sm">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {category.note && (
                  <div className="bg-forest/5 rounded-xl p-4 mb-6 border border-forest/10">
                    <p className="text-forest/70 text-xs flex items-start gap-2">
                      <span className="material-symbols-outlined text-forest text-sm mt-0.5">info</span>
                      {category.note}
                    </p>
                  </div>
                )}

                <a
                  href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(`Merhaba! ${category.name} için rezervasyon yapmak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-lg bg-accent hover:bg-red-700 text-white font-bold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Rezervasyon Yap</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Extras */}
          <div className="lg:col-span-1 rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <h3 className="text-forest text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-earth">add_a_photo</span>
              Ekstra Hizmetler
            </h3>
            <div className="space-y-3">
              {pricingData.extras.map((extra) => (
                <div
                  key={extra.name}
                  className="flex items-center justify-between p-3 rounded bg-surface border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-forest/50">{extra.icon}</span>
                    <span className="text-gray-700 text-sm font-medium">{extra.name}</span>
                  </div>
                  <span
                    className={`font-bold text-sm ${
                      extra.price === 'Ücretsiz' ? 'text-green-600' : 'text-earth'
                    }`}
                  >
                    {extra.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <h3 className="text-forest text-lg font-bold mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined text-forest">verified_user</span>
              Önemli Bilgiler &amp; Kurallar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {pricingData.policies.map((policy) => (
                <div key={policy.title} className="flex items-start gap-3">
                  <div className="bg-forest/10 p-2 rounded-full text-forest shrink-0">
                    <span className="material-symbols-outlined text-xl">{policy.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-forest text-sm font-bold">{policy.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">{policy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sticky Bar */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md border border-gray-200 rounded-full shadow-2xl px-6 py-3 items-center gap-6">
        <div className="flex items-center gap-2 text-forest pr-4 border-r border-gray-200">
          <span className="material-symbols-outlined text-earth">support_agent</span>
          <span className="text-sm font-medium">7/24 Destek</span>
        </div>
        <a
          href={`tel:${siteData.phone}`}
          className="flex items-center gap-2 text-forest/70 hover:text-forest transition-colors"
        >
          <span className="material-symbols-outlined text-lg">call</span>
          <span className="text-sm font-bold">{siteData.phone}</span>
        </a>
        <a
          href={`https://wa.me/${siteData.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-600 hover:text-green-500 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <span className="text-sm font-bold">WhatsApp Hattı</span>
        </a>
        <a
          href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-red-700 text-white rounded-full font-bold text-sm py-2 px-6 transition-all shadow-md ml-2"
        >
          Hemen Rezervasyon
        </a>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-xl p-4 md:hidden">
        <div className="flex gap-3 justify-between">
          <a
            href={`tel:${siteData.phone}`}
            className="flex-1 flex flex-col items-center justify-center gap-1 text-forest/60 hover:text-forest"
          >
            <span className="material-symbols-outlined">call</span>
            <span className="text-[10px] font-medium">Ara</span>
          </a>
          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 hover:text-green-500"
          >
            <span className="material-symbols-outlined">chat</span>
            <span className="text-[10px] font-medium">WhatsApp</span>
          </a>
          <a
            href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] bg-accent text-white rounded-lg font-bold text-sm py-2 px-4 shadow-md hover:bg-red-700 transition-colors text-center flex items-center justify-center"
          >
            Hemen Rezervasyon
          </a>
        </div>
      </div>
    </div>
  )
}
