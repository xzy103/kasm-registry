/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My kasm registry.',
    description: 'Myself store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kreg.esctab.com/kasm-registry/',
    contactUrl: 'https://github.com/xzy103/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
