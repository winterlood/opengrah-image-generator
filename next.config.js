/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:
      process.env.NODE_ENV === "development"
        ? process.env.BASE_URL_LOCAL
        : process.env.BASE_URL_PRODUCTION,
  },
};

module.exports = nextConfig;
