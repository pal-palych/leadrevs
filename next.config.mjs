const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https: data:; connect-src 'self' https://www.google-analytics.com https://formspree.io https://*.sanity.io; frame-ancestors 'self'",
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
