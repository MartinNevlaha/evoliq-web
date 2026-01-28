import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evoliq.cz';
  const currentDate = new Date();

  const locales = ['cs', 'en', 'sk'];
  const routes = ['', '/products/ai-control', '/products/ai-control/case-study'];

  return routes.flatMap(route => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.9,
    }))
  );
}
