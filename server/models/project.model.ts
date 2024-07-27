import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Project extends Model {
  public id!: number;
  public projectName!: string;
  public description!: string;
  public startDate!: Date;
  public endDate!: Date;
  public clientId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    projectName: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    clientId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id',
      },
    },
  },
  {
    tableName: 'projects',
    sequelize,
  }
);

export default Project;
