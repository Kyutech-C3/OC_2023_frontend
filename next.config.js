/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    images: {
        domains: ["s3.ap-northeast-2.wasabisys.com"],
    },
};
module.exports = nextConfig;
