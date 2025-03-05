/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'images.prismic.io'
            }
        ]
    },
    experimental: {
        serverActions: true,
        serverActionsBodySizeLimit: "4mb"
    },
}

module.exports = nextConfig
