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
    ],
  },
};

module.exports = nextConfig;
