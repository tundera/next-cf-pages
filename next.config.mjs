/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
    esmExternals: true,
    urlImports: ['https://cdn.skypack.dev'],
  },
  images: {
    domains: ['ak-static.cms.nba.com', 'cdn.nba.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
