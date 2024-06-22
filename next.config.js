/** @type {import('next').NextConfig} */
const nextConfig = {
    // adding external images
    images: { 
        remotePatterns:[
            {
                protocol: 'https',
                hostname:'unsplash.com', // example: unsplash.com
                pathname:'/photos/**'
            },
            {
                protocol: 'https',
                hostname:'images.unsplash.com', 
            },
            {
                protocol: 'https',
                hostname: 'www.freeimages.com',
                pathname:'/photo/**'
            },
            {
                protocol: 'https',
                hostname: 'www.pexels.com',
                pathname:'/photo/**'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname:'www.unsplash.com', 
                pathname:'/photos/**'
            },
        ],
    }
}

module.exports = nextConfig
