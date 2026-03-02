import { MetadataRoute } from 'next'
import toursData from '@/data/tours.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aslanbeyciftligi.com'

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/turlar`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/fiyatlar`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/galeri`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hakkimizda`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/iletisim`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/sss`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/konum`, priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const tourPages = toursData.map((tour) => ({
    url: `${baseUrl}/turlar/${tour.slug}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
  }))

  return [...staticPages, ...tourPages]
}
