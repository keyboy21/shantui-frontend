/**
 * @type {import('next').NextConfig}
 **/
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
		],
	},
	poweredByHeader: false,
	experimental: {
		nextScriptWorkers: true,
	},
};

const prod = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: prod ? false : true,
});
module.exports = withPWA(nextConfig);
