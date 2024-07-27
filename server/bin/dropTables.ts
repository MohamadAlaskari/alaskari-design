import sequelize from '../config/mySqlDb.config';
import models from '../models/modelIndex';

const dropTables = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // قم بحذف الجداول بالترتيب الصحيح
    await models.EmployeeProject.drop();
    console.log('EmployeeProject table dropped.');

    await models.File.drop();
    console.log('File table dropped.');

    await models.Comment.drop();
    console.log('Comment table dropped.');

    await models.Task.drop();
    console.log('Task table dropped.');

    await models.Project.drop();
    console.log('Project table dropped.');

    await models.Employee.drop();
    console.log('Employee table dropped.');

    await models.Account.drop();
    console.log('Account table dropped.');

    await models.Client.drop();
    console.log('Client table dropped.');

    await models.JobTitle.drop();
    console.log('JobTitle table dropped.');

    await models.User.drop();
    console.log('User table dropped.');

    await models.CompanyInfo.drop();
    console.log('CompanyInfo table dropped.');

    await models.Role.drop();
    console.log('Role table dropped.');

    await models.Service.drop();
    console.log('Service table dropped.');

    console.log('All tables were dropped successfully.');
  } catch (error) {
    console.error('Unable to drop the tables:', error);
  } finally {
    await sequelize.close();
  }
};

dropTables();
