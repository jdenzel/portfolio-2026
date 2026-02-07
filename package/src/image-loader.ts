export default function imageLoader({ src }: { src: string }) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const fullPath = `${basePath}${src}`;
    console.log(`[ImageLoader] src: ${src}, basePath: ${basePath}, fullPath: ${fullPath}`);
    return fullPath;
}
