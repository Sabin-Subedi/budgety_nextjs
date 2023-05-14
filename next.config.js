/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  compiler: {},
};

module.exports = nextConfig;
