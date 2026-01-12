import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // eslint config removed — Next.js 16.0.1 no longer supports this
  images: {
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};
export default nextConfig;
