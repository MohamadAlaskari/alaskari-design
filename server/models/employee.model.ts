import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Employee extends Model {
  public id!: number;
  public userId!: number;
  public jobTitleId!: number;
  public salary!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    jobTitleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'job_titles',
        key: 'id',
      },
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: 'employees',
    sequelize,
  }
);

export default Employee;
