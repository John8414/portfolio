module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/public/**',
      },
    ],
    unoptimized: true
  },
};