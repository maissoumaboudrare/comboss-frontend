/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'media3.giphy.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
    ]
  }
};

export default nextConfig;
