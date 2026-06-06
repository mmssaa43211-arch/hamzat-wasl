```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* تفعيل الخيارات المتوافقة مع الاستضافة المجانية */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
