import path from "node:path";
import { paraglide } from '@inlang/paraglide-next/plugin'

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

export default paraglide({paraglide: {
    projectId: "./project.inlang",
    outdir: "./src/paraglide"
},...nextConfig});
