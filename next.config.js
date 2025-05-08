/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com', 'https://images.unsplash.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
