// next.config.js (FINAL)
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Apenas para aceitar imagens de serviços externos (se você usar)
    domains: [
      'cdn.awsli.com.br', 
      'm.media-amazon.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;