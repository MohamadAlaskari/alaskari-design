import sequelize from '../config/mySqlDb.config';
import models from '../models/modelIndex';

const syncModels = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // قم بمزامنة النماذج بالترتيب الصحيح
    await models.Role.sync({ alter: true });
    console.log('Role table synchronized.');

    await models.CompanyInfo.sync({ alter: true });
    console.log('CompanyInfo table synchronized.');

    await models.User.sync({ alter: true });
    console.log('User table synchronized.');

    await models.JobTitle.sync({ alter: true });
    console.log('JobTitle table synchronized.');

    await models.Client.sync({ alter: true });
    console.log('Client table synchronized.');

    await models.Account.sync({ alter: true });
    console.log('Account table synchronized.');

    await models.Employee.sync({ alter: true });
    console.log('Employee table synchronized.');

    await models.Project.sync({ alter: true });
    console.log('Project table synchronized.');

    await models.Task.sync({ alter: true });
    console.log('Task table synchronized.');

    await models.Comment.sync({ alter: true });
    console.log('Comment table synchronized.');

    await models.File.sync({ alter: true });
    console.log('File table synchronized.');

    await models.Service.sync({ alter: true });
    console.log('Service table synchronized.');

    await models.EmployeeProject.sync({ alter: true });
    console.log('EmployeeProject table synchronized.');

    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize the models:', error);
  } finally {
    await sequelize.close();
  }
};

syncModels();
