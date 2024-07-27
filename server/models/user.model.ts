import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public contactPhone!: string;
  public street!: string;
  public houseNumber!: string;
  public postalCode!: string;
  public city!: string;
  public state!: string;
  public roleId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    contactPhone: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    street: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    houseNumber: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    postalCode: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    city: {
      type: new DataTypes.STRING(30),
      allowNull: false,
    },
    state: {
      type: new DataTypes.STRING(30),
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
  },
  {
    tableName: 'users',
    sequelize,
  }
);

export default User;
