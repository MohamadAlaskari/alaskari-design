import { Sequelize, Dialect } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const dbConfig = {
  dialect: 'mysql' as Dialect,
  host: process.env['MYSQL_HOST'],
  username: process.env['MYSQL_USER'],
  password: process.env['MYSQL_PASSWORD'],
  database: process.env['MYSQL_DATABASE'],
  logging: false, // Optionally disable logging
  define: {
    timestamps: false, // Optionally disable timestamps for all models
  },
};

const sequelize = new Sequelize(dbConfig.database!, dbConfig.username!, dbConfig.password, dbConfig);

export default sequelize;
