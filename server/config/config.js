const env = process.env.NODE_ENV || 'development';
let config = require('./config.json');
let envConfig = config[env];

if (env === 'development' || env === 'test') {
  Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
  });
}
