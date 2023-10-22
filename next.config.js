/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false, 
  pageExtensions: [ 'page.js'], // for extensions to be rendered on page routing
  async rewrites(){
  return [
      {
        source: '/home',
        destination: '/',
      },
    ]

},
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "*.replicate.delivery",
      },
    ],
  },
};


module.exports = nextConfig;
