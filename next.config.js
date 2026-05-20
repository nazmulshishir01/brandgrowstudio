/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'img.youtube.com'],
  },
  // Fix Windows file-locking webpack cache issue
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      compression: false,
    };
    return config;
  },
};

module.exports = nextConfig;
