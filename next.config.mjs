/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname:"res.cloudinary.com",
                port: '',
                search:'',
            },
            {
                protocol: 'https',
                hostname:"web-assests.monsterenergy.com",
                port: '',
                search:'',
            },
        ],
    }
};

export default nextConfig;
