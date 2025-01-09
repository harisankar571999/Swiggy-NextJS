import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig: NextConfig = {
  output: "export",
};

module.exports = withPWA({nextConfig});

