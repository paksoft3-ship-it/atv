import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import teamData from '@/data/team.json'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: 'Hakkımızda - Aslanbey Çiftliği Hikayemiz',
  description:
    "2015'ten beri İstanbul Pendik'te hizmet veren Aslanbey Çiftliği hakkında bilgi edinin. Misyonumuz, ekibimiz ve değerlerimiz.",
}

const values = [
  {
    icon: 'eco',
    title: 'Doğa Sevgisi',
    description:
      'Çevreyi koruyan, sürdürülebilir ve doğayla tam uyumlu aktiviteler sunarak ormanlarımıza sahip çıkıyoruz.',
    color: 'green',
  },
  {
    icon: 'local_fire_department',
    title: 'Adrenalin Tutkusu',
    description:
      'Heyecanı doruklarda yaşarken güvenlikten ödün vermiyoruz. Parkurlarımız her seviyeye uygun tasarlanmıştır.',
    color: 'orange',
  },
  {
    icon: 'diversity_3',
    title: 'Aile Ortamı',
    description:
      "Kapıdan girdiğiniz andan itibaren kendinizi evinizde hissedeceğiniz sıcak, samimi ve güvenli bir ortam.",
    color: 'blue',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMlVZcP5z9MDSLLLtJQ7MxNqrEwK3pQcPoP3AP9acrgJnhCHivY6M_Z36j4Syta9ouSWv5oQ6dVNchKMeAYzeWX7rlEnHapORF8aFN4iiU8KGL5f_GyOc82c8kjthdzavWrW-iIC-0zYnxitfn3GZEL-a69Ix6h7IaoHAVDfyuydD95xmuq6JdEQ4DlsKtN6bOiz2zaJn9JuDa8nlvCM66i7RoMbQUA-pT0Tgx051jgVQKrqmWGlc0arzPIryncQTRo9k9wgaOj8s')",
        }}
      >
        <div className="container px-4">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
            Pendik, İstanbul
          </span>
          <h1 className="mb-4 text-4xl font-black text-white md:text-6xl lg:text-7xl font-display">
            Hakkımızda
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
            Doğanın kalbinde, maceranın zirvesinde. Sizi şehrin gürültüsünden uzaklaştırıp,
            unutulmaz anılar biriktireceğiniz bir dünyaya davet ediyoruz.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-beige/20 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEpA8BUsCccpXbTUnjZsBiRvRrwMBmIsFJEi9JABQg1ybzzX3KloPFuso5KUuYAfkIf6hcD3NyI8Tgrto7gkyCNMIr4YzAFN69GQjFZVdUfInh6PkQ2l-e-ogOO3r6ZqAJ6QcWR6ioeOBr1gNPRObvSzBfpMdynMeSVCK7IXq94vx5trYKp71efCc46axXtcVMDWKlgIyoLEbv6J9IsP8QLipmKUMvLwurm8o_CYBKCRdAwzTa0kSP9Iw024UKxyhljaS8gHjGbLU"
                  alt="Aslanbey Çiftliği - Kuruluş"
                  width={600}
                  height={450}
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-6 left-6 text-white bg-forest/80 backdrop-blur px-4 py-2 rounded-lg">
                  <p className="font-bold text-lg">Kuruluş: 2015</p>
                  <p className="text-sm opacity-90">İlk günden beri aynı heyecanla.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:pl-10">
              <h2 className="mb-6 text-3xl font-bold text-earth md:text-4xl font-display">
                Bizim Hikayemiz
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="text-lg leading-relaxed">
                  Aslanbey Çiftliği olarak, İstanbul&apos;un stresinden uzaklaşmak isteyenler için
                  doğanın içinde huzurlu ve heyecan dolu bir kaçış noktası yarattık. Pendik
                  ormanlarında başlayan serüvenimiz, küçük bir aile işletmesi olarak filizlendi.
                </p>
                <p className="text-lg leading-relaxed">
                  Bugün, yüzlerce macera tutkununu ağırlayan kocaman bir aileye dönüştük. Toprağa
                  olan saygımız ve adrenalin tutkumuzla, her yaştan misafirimize ATV turları, at
                  binme eğitimleri ve doğa yürüyüşleri ile unutulmaz anılar yaşatmayı
                  hedefliyoruz.
                </p>
              </div>

              <div className="mt-8 flex gap-6 flex-wrap">
                {siteData.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl font-black text-earth font-display">{stat.value}</span>
                    <span className="text-sm font-medium text-slate-600">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Değerlerimiz</span>
            <h2 className="mt-2 text-3xl font-bold text-forest md:text-4xl font-display">
              Bizi Biz Yapanlar
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div
                  className={`mb-6 flex size-16 items-center justify-center rounded-full bg-${value.color}-100 text-${value.color}-600`}
                >
                  <span className="material-symbols-outlined text-4xl">{value.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-forest">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-forest py-20 text-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
                <span className="material-symbols-outlined text-sm text-accent">verified_user</span>
                <span className="text-sm font-bold tracking-wide">ÖNCE GÜVENLİK</span>
              </div>
              <h2 className="text-3xl font-bold md:text-5xl font-display">
                Maceranız Güvende
              </h2>
              <p className="text-lg text-slate-300">
                Adrenalin güzeldir, ancak güvenlik her şeyden önce gelir. Aslanbey
                Çiftliği&apos;nde tüm ekipmanlar düzenli olarak denetlenir ve bakım yapılır.
              </p>
              <ul className="space-y-4">
                {[
                  'Sertifikalı ve uzman rehberler eşliğinde turlar',
                  'Avrupa standartlarında kask ve koruyucu ekipmanlar',
                  'Her sürüş öncesi zorunlu güvenlik brifingi',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-accent text-white">
                      <span className="material-symbols-outlined text-base">check</span>
                    </span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/sss"
                  className="rounded-xl bg-accent hover:bg-red-700 px-8 py-3 text-base font-bold text-white transition-all"
                >
                  Güvenlik Standartlarımız
                </Link>
              </div>
            </div>

            <div className="flex-1 md:pl-12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr7el-zv3DgxWRdI9AwCG1LF-SXprx6Ph0wgAqERm1z4mXrDlBAa4lRcN8CmrXfBsRjCDhEimrlz5uvUr-M262Zjl0WoW_c6TXkqtK60SMbYmiMCHBoQin2fKguSIeMANkd8CFhggEcUAdtfEDeJo8WtH892bvdj3M08l2ywDNJ5d1FO5OTTaw_iAxFeneGGGRzlwEFsbFbVKgjoIdKU_QaGpxIlJb5Ubl2xBWMsCOUylEmsWTOlc4-LnLVogSAtVPRBYwQN2Mehw"
                  alt="ATV güvenlik ekipmanları"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 p-4 text-forest shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                    <div>
                      <p className="text-xs font-bold uppercase opacity-70">Sertifikalı</p>
                      <p className="font-bold">Güvenli Turizm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-forest md:text-4xl font-display">
              Ekibimizle Tanışın
            </h2>
            <p className="mt-4 text-slate-600">Alanında uzman, güler yüzlü rehberlerimiz.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-earth py-20 text-center text-white">
        <div className="relative z-10 container px-4">
          <h2 className="mb-4 text-4xl font-black md:text-5xl font-display">
            Doğada Bize Katılın
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90">
            Hafta sonu planınızı hala yapmadınız mı? Aslanbey Çiftliği&apos;nde macera sizi
            bekliyor.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Merhaba! Rezervasyon yapmak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full min-w-[180px] cursor-pointer items-center justify-center rounded-xl bg-accent hover:bg-red-700 px-6 text-white text-base font-bold shadow-lg transition-all sm:w-auto"
            >
              Hemen Rezervasyon Yap
            </a>
            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/10 px-6 text-white text-base font-bold shadow-lg hover:bg-white/20 sm:w-auto"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Hattı
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
