/** @type {import('next').NextConfig} */
const nextConfig = {
    // adding external images
    images: { 
        remotePatterns:[
            {
                protocol: 'https',
                hostname:'urlofimagehere.com' // example: unsplash.com
            }
        ]
    }
}

module.exports = nextConfig
