const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Viktig for GitHub Pages – prosjektet ligger på /Print
  basePath: isProd ? "/Print" : "",
  assetPrefix: isProd ? "/Print/" : ""
};

export default nextConfig;
