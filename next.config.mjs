/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // R2 pattern kept only for video files
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev',
      },
    ],
  },
}

export default nextConfig
