//  COMPUTERS\Downloads\yass last\create-sphere-market\Backend\src\config\config.js
module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI,
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'arthivesecret2024',
  jwtExpire: process.env.JWT_EXPIRE || '30d',
};

