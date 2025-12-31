import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // enables static export
  // trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
