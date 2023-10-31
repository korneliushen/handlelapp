/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bilder.ngdata.no',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
