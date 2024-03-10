const config = require(`./${
  process.env.VUE_APP_ENVIRONMENT
}`).default;

config.devtool='source-map';
export default config;
