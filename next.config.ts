import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      // Unsplash (all subdomains)
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      // Common image hosting services
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
    ],
  },
};

// export default nextConfig;
export default withMDX()(nextConfig);
