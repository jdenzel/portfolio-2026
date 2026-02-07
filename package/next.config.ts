import type { NextConfig } from "next";



const isProd = process.env.GH_PAGES_BUILD;

const nextConfig: NextConfig = {
    output: "export",
    basePath: isProd ? "/portfolio-2026" : "",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};


export default nextConfig;
