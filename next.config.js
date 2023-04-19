/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  dangerouslyAllowSVG: true,
  images: {
    domains: ['nft-cdn.alchemy.com', 'ipfs.io', 'witchernftart.xyz'],
  },
}

module.exports = nextConfig
