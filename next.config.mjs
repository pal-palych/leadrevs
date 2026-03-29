const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:; frame-ancestors 'self'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/portfolio", destination: "/", permanent: false },
      { source: "/portfolio/:slug", destination: "/", permanent: false },
      { source: "/docs", destination: "/", permanent: false },
      { source: "/docs/:slug", destination: "/", permanent: false },
      { source: "/auth/:path*", destination: "/", permanent: false },
      { source: "/404", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
