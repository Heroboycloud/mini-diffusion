/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [ 'js'],
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
