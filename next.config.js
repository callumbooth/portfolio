const withPlugins = require("next-compose-plugins");
const withSentry = require("./utils/withSentry");

module.exports = withPlugins([withSentry], {
  future: {
    webpack5: true,
  },
});
