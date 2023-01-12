/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.reloadly.com",
				port: "",
				pathname: "/giftcards/**",
			},
		],
	},
}

module.exports = nextConfig
