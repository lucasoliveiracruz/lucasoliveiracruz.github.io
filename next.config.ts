import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'github.com',
      pathname: '/lucasoliveiracruz**',
    },]
  }
};

export default nextConfig;
