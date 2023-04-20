/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['nft-cdn.alchemy.com', 'ipfs.io', 'witchernftart.xyz', 'metadata.ens.domains', 'arweave.net'],
  },
}

module.exports = nextConfig
