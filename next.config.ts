import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'
const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  //   output: 'export',
  // basePath: isProd ? '/Portfolioweb' : '',
  // assetPrefix: isProd ? '/Portfolioweb/' : '',
  // images: {
  //   unoptimized: true, // Required if you're using next/image
  // },
output: 'export',
  basePath: isProd ? '/Portfolioweb' : '',
  assetPrefix: isProd ? '/Portfolioweb/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
