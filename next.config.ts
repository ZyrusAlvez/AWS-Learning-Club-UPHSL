import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here
  eslint: {
    // ✅ allow builds even if there are lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
