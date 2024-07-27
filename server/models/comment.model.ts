import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';

class Comment extends Model {
  public id!: number;
  public taskId!: number;
  public userId!: number;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    taskId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    content: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
  },
  {
    tableName: 'comments',
    sequelize,
  }
);

export default Comment;
