import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evoliq.cz';
  const currentDate = new Date();

  const routes = ['', '/products/ai-control', '/products/ai-control/case-study', '/labs', '/labs/unflatten-w'];

  return routes.flatMap(route => 
    routing.locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.9,
    }))
  );
}
