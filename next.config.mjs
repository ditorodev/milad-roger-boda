import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@/images": path.join(process.cwd(), "images")
        };
        return config;
    }
};

export default nextConfig;
