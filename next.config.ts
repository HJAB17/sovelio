import type { NextConfig } from "next";

// Le site est publié sur GitHub Pages avec un domaine personnalisé (https://sovelio.eu)
// servi à la racine → aucun basePath nécessaire.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;