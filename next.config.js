/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    STRAPI_BACKEND_URL: process.env.STRAPI_BACKEND_URL,
    PORT: process.env.PORT
  },
};

module.exports = nextConfig;
