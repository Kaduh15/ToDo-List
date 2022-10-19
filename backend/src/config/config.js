require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DATABASE,
    dialect: 'mysql',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
  test: {
    database: 'todo_list_test',
    dialect: 'mysql',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
  production: {
    database: process.env.DATABASE,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
  },
};