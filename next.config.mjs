/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for now to get it working
  // output: 'export',
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // unoptimized: true, // Only needed for static export
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Compression
  compress: true,
}

export default nextConfig
