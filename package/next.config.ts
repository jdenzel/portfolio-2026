import type { NextConfig } from "next";

const isProd = process.env.GH_PAGES_BUILD;
const basePath = isProd ? "/portfolio-2026" : "";

console.log("------------------------------------------");
console.log("Is Github Pages Build:", isProd);
console.log("Base Path:", basePath);
console.log("------------------------------------------");

const nextConfig: NextConfig = {
    output: "export",
    basePath: basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        loader: "custom",
        loaderFile: "./src/image-loader.ts",
    },
    trailingSlash: true,
};

export default nextConfig;
