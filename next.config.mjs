import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["randomuser.me"], // Allows external images from this domain
    },
    reactStrictMode: true, // Ensures best React practices
    swcMinify: true, // Improves performance
};

export default withSentryConfig(
    nextConfig,
    {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

        silent: true, // Suppresses source map uploading logs during build
        org: "javascript-mastery",
        project: "javascript-nextjs",
    },
    {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        widenClientFileUpload: true, // Upload a larger set of source maps for better stack traces
        transpileClientSDK: true, // Ensures compatibility with older browsers like IE11
        hideSourceMaps: true, // Hides source maps from generated client bundles
        disableLogger: true, // Tree-shakes Sentry logger statements to reduce bundle size
        automaticVercelMonitors: true, // Enables automatic monitoring of Vercel Cron jobs

        // Uncomment to route browser requests to Sentry through a Next.js rewrite
        // tunnelRoute: "/monitoring",
    }
);