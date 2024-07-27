import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Service extends Model {
  public id!: number;
  public serviceName!: string;
  public description!: string;
  public price!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    serviceName: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: 'services',
    sequelize,
  }
);

export default Service;
