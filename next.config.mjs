/** @type {import('next').NextConfig} */

// NB: sett denne til nøyaktig repo-navn på GitHub
const repoName = "Print";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  // På GitHub Pages må alt ligge under /<repo>/...
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",

  images: {
    unoptimized: true
  },

  // For denne PrintEngine-prototypen: ikke stopp build på TS/ESLint-feil
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
