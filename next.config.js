const withPlugins = require("next-compose-plugins");
const withSentry = require("./utils/withSentry");

module.exports = withPlugins([withSentry], {
  images: {
    domains: ["media.graphcms.com"],
  },
});
