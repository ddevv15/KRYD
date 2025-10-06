/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export", // <CHANGE> required for static export (GitHub Pages)
  basePath: "/KRYD", // <CHANGE> ensures correct routing under your repo path
  assetPrefix: "/KRYD/", // <CHANGE> fixes broken image/script paths
  images: {
    unoptimized: true, // required for static export (disables server optimization)
  },
};

export default nextConfig;
