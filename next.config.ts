import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages is static hosting and cannot run the Next/Vinext image
  // optimization endpoint. Serve the already web-sized local photos directly.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
