/** @type {import('next').NextConfig} */
const isDevServer = process.env.NODE_ENV === 'development'

const nextConfig = {
  distDir: isDevServer ? '.next-dev' : '.next',
  transpilePackages: ['three'],
  images: {
    formats: ['image/avif', 'image/webp'],
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
  async headers() {
    const immutableImageCache = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ]

    return [
      {
        source: '/images/work/:path*',
        headers: immutableImageCache,
      },
      {
        source: '/images/project-gps-2/:path*',
        headers: immutableImageCache,
      },
      {
        source: '/images/industrial-ai-detection/:path*',
        headers: immutableImageCache,
      },
      {
        source: '/Project_P2/source/src/imports/Wms/:path*',
        headers: immutableImageCache,
      },
    ]
  },
}

module.exports = nextConfig
