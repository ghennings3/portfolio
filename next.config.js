/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com', 'sa-east-1.graphassets.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
