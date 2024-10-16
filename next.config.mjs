/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dealerpull.blob.core.windows.net"],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store", // Disable caching for dynamic files
          },
        ],
      },
    ];
  },
};

export default nextConfig;
