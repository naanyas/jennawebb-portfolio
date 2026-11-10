import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static demos in /public are served at their folder path (e.g. /smartstart).
  async rewrites() {
    return [{ source: "/smartstart", destination: "/smartstart/index.html" }];
  },
};

export default nextConfig;
