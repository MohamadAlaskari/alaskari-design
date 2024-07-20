require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbConfig = {
  dialect: process.env.MYSQL_DIALECT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
