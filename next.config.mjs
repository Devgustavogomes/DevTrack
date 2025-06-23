/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Aqui você lista os domínios permitidos para uso com <Image />
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
