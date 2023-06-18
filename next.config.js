/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "resizer.otstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
