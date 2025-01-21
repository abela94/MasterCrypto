/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mastercrypto.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mastercrypto.orgnull',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      }
    }
    return config
  },
};

export default nextConfig;

