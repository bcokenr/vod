/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Export as static site suitable for Hostinger static hosting
  output: 'export',
  trailingSlash: true,
  allowedDevOrigins: ['192.168.0.10'],
};
