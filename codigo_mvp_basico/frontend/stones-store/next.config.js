/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
