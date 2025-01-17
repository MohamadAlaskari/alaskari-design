import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Role extends Model {
  public id!: number;
  public roleName!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    roleName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'roles',
    sequelize,
  }
);

export default Role;
