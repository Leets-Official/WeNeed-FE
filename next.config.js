/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main/portfolio',
        permanent: true,
      },
      {
        source: '/main',
        destination: '/main/portfolio',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        port: '',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
