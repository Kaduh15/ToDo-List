require('dotenv').config();

const config = {
  database: process.env.DATABASE,
  dialect: 'mysql',
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
};

module.exports = {
  development: config,
  test: config,
  production: {
    database: process.env.DATABASE,
    dialect: 'postgresql',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
};