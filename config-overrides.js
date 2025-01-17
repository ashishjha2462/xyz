// config-overrides.js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ['javascript', 'cpp', 'python'],
      features: ['!contextmenu', '!quickCommand', '!find'],
    })
  );
  return config;
};
