/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            { source: '/about', destination: '/', permanent: true },
            { source: '/projects', destination: '/work', permanent: true },
        ];
    },
};

module.exports = nextConfig;
