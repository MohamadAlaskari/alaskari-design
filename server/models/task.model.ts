import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Task extends Model {
  public id!: number;
  public projectId!: number;
  public taskName!: string;
  public description!: string;
  public assignedTo!: number;
  public status!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    projectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'id',
      },
    },
    taskName: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    assignedTo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'id',
      },
    },
    status: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: 'tasks',
    sequelize,
  }
);

export default Task;
