const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-360-view']);
const nextTranslate = require('next-translate');

const nextConfig = {
  env: {
    BACKEND_PUBLIC_URL: process.env.BACKEND_PUBLIC_URL,
    PUBLIC_URL: process.env.PUBLIC_URL,
    API_BASE_URL: process.env.API_BASE_URL
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = withPlugins(
  [
    [withTM, {transpileModules: []}],
    nextTranslate,
  ],
  nextConfig
);
