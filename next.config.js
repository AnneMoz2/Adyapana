const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Docker deployment
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
};

module.exports = withNextIntl(nextConfig);

