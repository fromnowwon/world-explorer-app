import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  plugins: ["react-compiler"],
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
};

export default nextConfig;
