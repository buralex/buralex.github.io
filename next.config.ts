import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  sassOptions: {
    outputStyle: 'expanded', // Prevents minification in development mode
  },
  reactStrictMode: true,
};

export default nextConfig;
