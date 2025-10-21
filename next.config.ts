import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["sk", "cz", "en"],
    defaultLocale: "sk",
  },
};

export default nextConfig;
