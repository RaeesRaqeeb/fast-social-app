/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        // Optional rules can be added here if needed
    }, 
    // Fixes the uploadthing .d.cts parsing conflict by forcing standard resolution
    serverExternalPackages: ['@uploadthing/dropzone', 'uploadthing'],
    images: {
        // Updated from deprecated domains to remotePatterns as flagged by your build logs
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
