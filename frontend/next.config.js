/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // <- trueだと効かない
}

module.exports = nextConfig