import Link from 'next/link'
import Image from 'next/image'
import siteData from '@/data/site.json'

export default function Footer() {
  return (
    <footer className="bg-white text-forest pt-16 pb-8 border-t border-gray-200" id="iletisim">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Aslanbey Çiftliği"
                width={160}
                height={41}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Pendik, İstanbul&apos;da doğayla iç içe, güvenli ve heyecan dolu ATV &amp; UTV safari
              deneyimi. Haftanın her günü hizmetinizdeyiz.
            </p>
            <div className="flex gap-4">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white flex items-center justify-center transition-colors text-forest"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteData.social.facebook}
                className="size-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white flex items-center justify-center transition-colors text-forest"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-forest">Hızlı Erişim</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              {[
                { href: '/turlar', label: 'Turlar & Aktiviteler' },
                { href: '/fiyatlar', label: 'Fiyat Listesi' },
                { href: '/galeri', label: 'Fotoğraf Galerisi' },
                { href: '/hakkimizda', label: 'Hakkımızda' },
                { href: '/sss', label: 'Sıkça Sorulanlar' },
                { href: '/iletisim', label: 'İletişim & Ulaşım' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-forest">İletişim</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent shrink-0">location_on</span>
                <span>Kurna Mahallesi, Pendik<br />İstanbul, Türkiye</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent shrink-0">call</span>
                <a href={`tel:${siteData.phone}`} className="hover:text-accent transition-colors">
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent shrink-0">mail</span>
                <a href={`mailto:${siteData.email}`} className="hover:text-accent transition-colors">
                  {siteData.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-forest">Çalışma Saatleri</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex justify-between">
                <span>Pazartesi - Cuma</span>
                <span className="font-semibold text-forest">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Cumartesi - Pazar</span>
                <span className="font-semibold text-forest">09:00 - 22:00</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-xs text-gray-500">
                Hafta sonları yoğunluk nedeniyle rezervasyon yaptırmanız önerilir.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Aslanbey Çiftliği. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-forest transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-forest transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
