import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://sttkm.uz',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://sttkm.uz/specvehicles',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://sttkm.uz/factories',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: 'https://sttkm.uz/projects',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: 'https://sttkm.uz/service',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.4,
		},
		{
			url: 'https://sttkm.uz/contacts',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.7,
		},
	];
}
