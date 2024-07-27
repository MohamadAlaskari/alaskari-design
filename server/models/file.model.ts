import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class File extends Model {
  public id!: number;
  public projectId!: number;
  public taskId!: number;
  public fileName!: string;
  public filePath!: string;
  public uploadedBy!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

File.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    projectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'projects',
        key: 'id',
      },
    },
    taskId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'tasks',
        key: 'id',
      },
    },
    fileName: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    filePath: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    uploadedBy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    tableName: 'files',
    sequelize,
  }
);

export default File;
