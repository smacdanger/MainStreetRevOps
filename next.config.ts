import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude netlify functions from build
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Don't process netlify functions during build
    config.module.rules.push({
      test: /netlify\/functions/,
      use: 'ignore-loader'
    });
    
    return config;
  },
};

export default nextConfig;
