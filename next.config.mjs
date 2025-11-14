/** @type {import('next').NextConfig} */

// NB: repo-navn
const repoName = "Print";

const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },

  // Gjør basePath tilgjengelig i kode
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },

  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
