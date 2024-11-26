/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure React strict mode is enabled
  reactStrictMode: true,
  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig; 
