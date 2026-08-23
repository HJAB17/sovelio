import type { NextConfig } from "next";

// GitHub Pages sert le site depuis https://hjab17.github.io/sovelio/
// → basePath requis en production pour que les assets CSS/JS soient résolus.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/sovelio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;