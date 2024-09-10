/** @type {import('next').NextConfig} */
const nextConfig = {
    // Export a static html/css/js
    output: "export",
    compress: true,
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
};

export default nextConfig;
