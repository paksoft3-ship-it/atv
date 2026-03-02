import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <div className="size-24 bg-forest/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-5xl text-forest">terrain</span>
        </div>
        <h1 className="text-6xl font-display font-black text-forest mb-4">404</h1>
        <h2 className="text-2xl font-display font-bold text-forest mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil. Belki de parkurda kaybolmuş olabilirsiniz. Ana sayfaya
          dönün!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="bg-forest hover:bg-forest/90 text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </div>
  )
}
