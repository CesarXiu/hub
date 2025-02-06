import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
