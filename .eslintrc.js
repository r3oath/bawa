const path = require('path');

module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
