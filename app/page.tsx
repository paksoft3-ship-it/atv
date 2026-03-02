import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ToursSection from '@/components/home/ToursSection'
import PricingSection from '@/components/home/PricingSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import GallerySection from '@/components/home/GallerySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import LocationSection from '@/components/home/LocationSection'
import FAQSection from '@/components/home/FAQSection'
import ReservationSection from '@/components/home/ReservationSection'

export const metadata: Metadata = {
  title: 'Aslanbey Çiftliği - ATV & UTV Safari | Pendik, İstanbul',
  description:
    "İstanbul Pendik'te doğanın kalbinde ATV, UTV safari ve at turu deneyimi. Göl kenarı rotaları, profesyonel rehberler, tam güvenlik ekipmanı. 750₺'den başlayan fiyatlarla hemen rezervasyon yapın!",
  openGraph: {
    title: 'Aslanbey Çiftliği - ATV & UTV Safari | Pendik, İstanbul',
    description:
      "İstanbul Pendik'te doğanın kalbinde ATV, UTV safari ve at turu deneyimi. Hemen rezervasyon yapın!",
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCLHLAg4F1mwe3XZzA-JIEFCHN9ENwugJqMACmgfAqI_B2Cd8jE4-af1ALvE9SNHHGdVVhExIopVe88YDW767PqVErn3oeeR07sAPsqXRGeNZy75GQ9WWzgRv_Y6vCxRcdz0Jt3Rm1kK00Jy354hRTb9ud9_dmCESXPJ6vvZjO3An45NlUi4ZZMX1akX51ZAZoudA2ZCQ2spTc7X0T_QoG-ffDmJMLS7_uaELBDks4txZMAUI0bRCOGG0F10aSzSfte17inTsXBb0',
        width: 1200,
        height: 630,
        alt: 'Aslanbey Çiftliği ATV Safari',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ToursSection />
      <PricingSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      <ReservationSection />
    </>
  )
}
