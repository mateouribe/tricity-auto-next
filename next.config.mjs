// next.config.mjs

import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Ensure cron job runs only on the server side
if (typeof window === "undefined") {
  require("./src/cron/inventoryCron");
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
