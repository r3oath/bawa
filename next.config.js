const path = require('path');

module.exports = {
  webpack(config) {
    return Object.assign(config, {
      resolve: {
        alias: {
          '@app': path.resolve(__dirname),
        },
      },
    });
  },
};
