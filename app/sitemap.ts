import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: '/products',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
	];
}
