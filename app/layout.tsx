import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import siteData from '@/data/site.json'

export const metadata: Metadata = {
  title: {
    default: siteData.seo.defaultTitle,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.seo.defaultDescription,
  keywords: siteData.seo.keywords,
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  metadataBase: new URL('https://aslanbeyciftligi.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: siteData.name,
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Google Ads - Replace with your actual ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXXX');
            `,
          }}
        />
        {/* Google Analytics - Replace with your actual ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TouristAttraction',
              name: siteData.name,
              description: siteData.seo.defaultDescription,
              url: 'https://aslanbeyciftligi.com',
              telephone: siteData.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pendik',
                addressRegion: 'Istanbul',
                addressCountry: 'TR',
                streetAddress: 'Kurna Mahallesi',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.914289,
                longitude: 29.356789,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '09:00',
                  closes: '22:00',
                },
              ],
              priceRange: '₺₺',
            }),
          }}
        />
      </head>
      <body className="bg-surface text-forest font-body antialiased selection:bg-accent selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
