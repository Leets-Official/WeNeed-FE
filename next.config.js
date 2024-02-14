/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.billboard.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        port: '',
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
