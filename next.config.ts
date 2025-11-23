import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  outputFileTracingRoot: "D:/project-gwi/god_win_iorn",
  images: {
    domains: ["opengraph.githubassets.com"],
    qualities: [75, 100],
  },
};

export default nextConfig;
