import type { NextConfig } from "next";

const isBuild = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /*config options here*/ 
  basePath: isBuild ? '/hub/out' : '',
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
};

export default nextConfig;
