import sequelize from '../config/mySqlDb.config';
import User from '../models/user.model';
import Role from '../models/role.model';
import CompanyInfo from '../models/companyInfo.model';

const dropTables = async () => {
  try {
    // قم بحذف كل جدول على حدة
    await User.drop();
    console.log('User table dropped.');

    await Role.drop();
    console.log('Role table dropped.');

    await CompanyInfo.drop();
    console.log('CompanyInfo table dropped.');

    // في حال كنت تريد حذف جميع الجداول دفعة واحدة، استخدم sequelize.drop() بدون أي معاملات.
    // await sequelize.drop();
    // console.log('All tables were dropped successfully.');
  } catch (error) {
    console.error('Unable to drop the tables:', error);
  } finally {
    await sequelize.close();
  }
};

dropTables();
