/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to allow API routes to work
  // If you need static export, use it only for production builds without API routes
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // Set to true only if you have type errors you need to ignore temporarily
  },
  images: { 
    unoptimized: true,
    domains: [], // Add any external image domains here
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
};

module.exports = nextConfig;
