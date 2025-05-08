import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'uithemez.com', protocol: 'https' },
    ],
  },
};

export default nextConfig;
