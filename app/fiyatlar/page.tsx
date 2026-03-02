import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import pricingData from '@/data/pricing.json'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: 'Fiyat Listesi - ATV Safari & At Turu Ücretleri',
  description:
    "Aslanbey Çiftliği'nde ATV safari, UTV turu ve at biniciliği fiyatları. 30 dakika 750₺'den başlayan fiyatlarla doğa macerası. Hemen rezervasyon yapın!",
}

export default function PricingPage() {
  return (
    <div className="bg-[#1d1a15] min-h-screen text-white">
      {/* Hero */}
      <div className="relative min-h-[400px] flex flex-col gap-6 items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8QPpTefHlua8p_tcddXfpkp1EWHU-IxuyOwUo6-QmERTiQLFbGO4QSnMaAT-zk0Yp1N6ApyYktOfqJJJFoOxdS9O9fGksPR2Ir3e5LjcjrnWl8xfrQYMkOyvUsV7BkSOILi73EiPMYVFWRB_EWAa09INyBsbPkAC7udhhXMB3722kT9vMtckeI0BRJCA0xZsXRE53sr38qBvLhWOik-WWAO8u4v0KcRr0JBNSj16jIn1YHkSLqqHJhdeRwQGP4Jn5iudV1fOejhk"
            alt="Fiyatlar"
            fill
            className="object-cover opacity-60 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d1a15]/80 via-[#1d1a15]/60 to-[#1d1a15]" />
        </div>
        <div className="relative z-10 flex flex-col gap-3 text-center max-w-2xl">
          <span className="text-earth font-bold tracking-widest uppercase text-sm">
            Macera Seni Bekliyor
          </span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Fiyat Listesi
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mt-2">
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
              className="flex flex-col rounded-xl overflow-hidden border border-[#5a4e3f] bg-[#2d2720] shadow-2xl group hover:border-earth/50 transition-all duration-300"
            >
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-earth text-3xl">
                    {category.icon}
                  </span>
                  <h2 className="text-white text-2xl font-bold">{category.name}</h2>
                </div>
                <p className="text-slate-400 text-sm mb-6">{category.description}</p>

                <div className="space-y-4 mb-8 flex-1">
                  {category.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`flex justify-between items-center p-4 rounded-lg border relative overflow-hidden ${
                        pkg.popular
                          ? 'bg-beige/10 border-earth/30'
                          : 'bg-[#1d1a15] border-[#5a4e3f]'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute left-0 top-0 w-1 h-full bg-earth" />
                      )}
                      <div>
                        <span className={`font-${pkg.popular ? 'bold text-white' : 'medium text-slate-300'}`}>
                          {pkg.name}
                        </span>
                        <p className="text-slate-500 text-xs">{pkg.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-${pkg.popular ? '3' : '2'}xl font-black text-earth`}>
                          {pkg.price.toLocaleString('tr-TR')}₺
                        </span>
                        {'unit' in pkg && pkg.unit && (
                          <p className="text-slate-500 text-xs">/ {pkg.unit}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {category.includes && (
                  <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                    {category.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-earth text-sm">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {category.note && (
                  <div className="bg-black/20 rounded-xl p-4 mb-6">
                    <p className="text-slate-400 text-xs flex items-start gap-2">
                      <span className="material-symbols-outlined text-beige text-sm mt-0.5">info</span>
                      {category.note}
                    </p>
                  </div>
                )}

                <a
                  href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(`Merhaba! ${category.name} için rezervasyon yapmak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-lg bg-earth hover:bg-[#5a4223] text-white font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
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
          <div className="lg:col-span-1 rounded-xl border border-[#5a4e3f] bg-[#2d2720] p-6">
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-earth">add_a_photo</span>
              Ekstra Hizmetler
            </h3>
            <div className="space-y-3">
              {pricingData.extras.map((extra) => (
                <div
                  key={extra.name}
                  className="flex items-center justify-between p-3 rounded bg-[#1d1a15]/50 border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">{extra.icon}</span>
                    <span className="text-slate-200 text-sm font-medium">{extra.name}</span>
                  </div>
                  <span
                    className={`font-bold text-sm ${
                      extra.price === 'Ücretsiz' ? 'text-green-500' : 'text-earth'
                    }`}
                  >
                    {extra.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2 rounded-xl border border-[#5a4e3f] bg-[#25201a] p-6 relative overflow-hidden">
            <h3 className="text-white text-lg font-bold mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined text-beige">verified_user</span>
              Önemli Bilgiler &amp; Kurallar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {pricingData.policies.map((policy) => (
                <div key={policy.title} className="flex items-start gap-3">
                  <div className="bg-earth/20 p-2 rounded-full text-earth shrink-0">
                    <span className="material-symbols-outlined text-xl">{policy.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">{policy.title}</h4>
                    <p className="text-slate-400 text-xs mt-1">{policy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sticky Bar */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#2d2720]/90 backdrop-blur-md border border-[#5a4e3f] rounded-full shadow-2xl px-6 py-3 items-center gap-6">
        <div className="flex items-center gap-2 text-white pr-4 border-r border-white/10">
          <span className="material-symbols-outlined text-earth">support_agent</span>
          <span className="text-sm font-medium">7/24 Destek</span>
        </div>
        <a
          href={`tel:${siteData.phone}`}
          className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-lg">call</span>
          <span className="text-sm font-bold">{siteData.phone}</span>
        </a>
        <a
          href={`https://wa.me/${siteData.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <span className="text-sm font-bold">WhatsApp Hattı</span>
        </a>
        <a
          href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-earth hover:bg-[#5a4223] text-white rounded-full font-bold text-sm py-2 px-6 transition-all shadow-lg ml-2"
        >
          Hemen Rezervasyon
        </a>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#2d2720] border-t border-[#5a4e3f] shadow-xl p-4 md:hidden">
        <div className="flex gap-3 justify-between">
          <a
            href={`tel:${siteData.phone}`}
            className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-300 hover:text-white"
          >
            <span className="material-symbols-outlined">call</span>
            <span className="text-[10px] font-medium">Ara</span>
          </a>
          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 text-green-500 hover:text-green-400"
          >
            <span className="material-symbols-outlined">chat</span>
            <span className="text-[10px] font-medium">WhatsApp</span>
          </a>
          <a
            href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] bg-earth text-white rounded-lg font-bold text-sm py-2 px-4 shadow-lg hover:bg-[#5a4223] transition-colors text-center flex items-center justify-center"
          >
            Hemen Rezervasyon
          </a>
        </div>
      </div>
    </div>
  )
}
