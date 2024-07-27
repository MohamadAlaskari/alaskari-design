import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class JobTitle extends Model {
  public id!: number;
  public jobTitleName!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

JobTitle.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    jobTitleName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'job_titles',
    sequelize,
  }
);

export default JobTitle;
