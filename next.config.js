/** @type {import('next').NextConfig} */
const isDevServer = process.env.NODE_ENV === 'development'

const nextConfig = {
  distDir: isDevServer ? '.next-dev' : '.next',
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
}

module.exports = nextConfig
