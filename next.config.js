const withPlugins = require("next-compose-plugins");
const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const SENTRY_DRYRUN =
  process.env.DRYRUN === "true" ||
  ["development"].includes(process.env.NEXT_PUBLIC_VERCEL_ENV || "development");

const moduleExports = {
  reactStrictMode: true
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  dryRun: SENTRY_DRYRUN
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withPlugins(
  [withBundleAnalyzer],
  withSentryConfig(moduleExports, SentryWebpackPluginOptions)
);
