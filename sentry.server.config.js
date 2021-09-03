// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

const env = process.env.NEXT_PUBLIC_VERCEL_ENV || "development";

if (env !== "development") {
  Sentry.init({
    dsn:
      SENTRY_DSN ||
      "https://872da5c0ff7f48729a0fd36f8a6132fb@o564620.ingest.sentry.io/5705452",
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1.0,
    environment: env
    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
  });
}
