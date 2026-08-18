import type { NextConfig } from "next";

const BACKEND =
  process.env.NEXT_PUBLIC_API_URL ?? "https://13-127-244-179.sslip.io";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  // The backend only sends Access-Control-Allow-Origin: https://meditroncdc.com,
  // so direct browser calls are CORS-blocked on localhost. Proxying through Next
  // makes every admin request same-origin, which sidesteps CORS entirely.
  async rewrites() {
    return [
      {
        source: "/backend-api/:path*",
        destination: `${BACKEND}/:path*`,
      },
    ];
  },
};

export default nextConfig;
