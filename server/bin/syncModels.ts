const sequelize = require('../config/mySqlDb.config').default;
const models = require('../models/modelIndex').default;

const syncModels = async () => {
  try {
    // Ensure the database connection is established
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models
    await sequelize.sync({ alter: true }); // `alter: true` will try to update the tables to match the models
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize the models:', error);
  } finally {
    await sequelize.close();
  }
};

syncModels();
