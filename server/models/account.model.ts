import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Account extends Model {
  public id!: number;
  public userId!: number;
  public username!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Account.init(
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
    username: {
      type: new DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'accounts',
    sequelize,
  }
);

export default Account;
