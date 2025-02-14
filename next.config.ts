import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables `next export`
  images: { unoptimized: true }
};

export default nextConfig;
