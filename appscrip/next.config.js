/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.icons8.com', 'cdn.jsdelivr.net'], // Add allowed domains here
  },
};

module.exports = nextConfig;
