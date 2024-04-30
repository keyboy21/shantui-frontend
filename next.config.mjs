/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
			},
			{
				protocol: 'https',
				hostname: 'shantui.westcoast.uz',
			},
			{
				protocol: 'https',
				hostname: 'shantui.42.com.uz',
			},
			{
				protocol: 'http',
				hostname: 'shantui.42.com.uz',
			},
		],
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Developed-By',
						value: 'Yusuf Saydullayev',
					},
				],
			},
		];
	},
};

export default nextConfig;
