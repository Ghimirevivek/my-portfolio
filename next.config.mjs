import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configuration options
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['codewithvivek.in'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
};

export default withSentryConfig(
  withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: 'portfolio-ix',
    project: 'javascript-nextjs',
    silent: !process.env.CI, // Only print logs for uploading source maps in CI
    widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces
    reactComponentAnnotation: {
      enabled: true, // Automatically annotate React components
    },
    // Uncomment to enable request routing to circumvent ad-blockers
    // tunnelRoute: "/monitoring",
    hideSourceMaps: true, // Hides source maps from client bundles
    disableLogger: true, // Automatically tree-shake Sentry logger statements
    automaticVercelMonitors: true, // Enables instrumentation of Vercel Cron Monitors
  }),
  {
    org: 'portfolio-ix',
    project: 'javascript-nextjs',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
      enabled: true,
    },
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);

// import { withSentryConfig } from '@sentry/nextjs';
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export',
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     domains: ['codewithvivek.in'],
//     unoptimized: true,
//   },

//   eslint: {
//     ignoreDuringBuilds: true, // Ignores ESLint errors during builds
//   },
// };

// export default withSentryConfig(
//   withSentryConfig(nextConfig, {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options

//     org: 'portfolio-ix',
//     project: 'javascript-nextjs',

//     // Only print logs for uploading source maps in CI
//     silent: !process.env.CI,

//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Automatically annotate React components to show their full name in breadcrumbs and session replay
//     reactComponentAnnotation: {
//       enabled: true,
//     },

//     // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//     // This can increase your server load as well as your hosting bill.
//     // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//     // side errors will fail.
//     // tunnelRoute: "/monitoring",

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,

//     // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
//     // See the following for more information:
//     // https://docs.sentry.io/product/crons/
//     // https://vercel.com/docs/cron-jobs
//     automaticVercelMonitors: true,
//   }),
//   {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options

//     org: 'portfolio-ix',
//     project: 'javascript-nextjs',

//     // Only print logs for uploading source maps in CI
//     silent: !process.env.CI,

//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Automatically annotate React components to show their full name in breadcrumbs and session replay
//     reactComponentAnnotation: {
//       enabled: true,
//     },

//     // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//     // This can increase your server load as well as your hosting bill.
//     // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//     // side errors will fail.
//     tunnelRoute: '/monitoring',

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,

//     // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
//     // See the following for more information:
//     // https://docs.sentry.io/product/crons/
//     // https://vercel.com/docs/cron-jobs
//     automaticVercelMonitors: true,
//   }
// );
