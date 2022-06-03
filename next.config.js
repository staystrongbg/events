/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GGL_API_KEY: 'AIzaSyBUGYVr0B8bfX0j6NyeqtFD3IVIaGugo9c',
    GGL_AUTH_DOMAIN: 'dj-events-dc10a.firebaseapp.com',
    GGL_PROJECT_ID: 'dj-events-dc10a',
    GGL_STORAGE_BUCKET: 'dj-events-dc10a.appspot.com',
    GGL_MESSAGING_ID: '931013798457',
    APP_ID: '1:931013798457:web:0dc4f2f2d3855cf353fbe8',
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
