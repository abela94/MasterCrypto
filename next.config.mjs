/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [{
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
        hostname: 'mastercrypto.onrender.com',
    
        pathname: '/**',
      },
        ],
        
    }
};

export default nextConfig;
