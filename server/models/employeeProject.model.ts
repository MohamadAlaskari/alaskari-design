import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class EmployeeProject extends Model {
  public id!: number;
  public employeeId!: number;
  public projectId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

EmployeeProject.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'id',
      },
    },
    projectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'id',
      },
    },
  },
  {
    tableName: 'employee_projects',
    sequelize,
  }
);

export default EmployeeProject;
