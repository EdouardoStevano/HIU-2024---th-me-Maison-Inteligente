let config;
if (process.env.NODE_ENV === 'production') {
  config = require('./config/prod.js');
} else {
  config = require('./config/dev.js');
}

export default config;
