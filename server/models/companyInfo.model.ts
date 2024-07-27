import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/mySqlDb.config';
import Service from './service.model';

class CompanyInfo extends Model {
  public id!: number;
  public companyName!: string;
  public slogan!: string;
  public aboutUs!: string;
  public contactEmail!: string;
  public contactPhone!: string;
  public street!: string;
  public houseNumber!: string;
  public city!: string;
  public state!: string;
  public postalCode!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CompanyInfo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    companyName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    slogan: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    aboutUs: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    contactEmail: {
      type: new DataTypes.STRING(128),
      allowNull: false,
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
    city: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    state: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    postalCode: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: 'company_info',
    sequelize,
  }
);



export default CompanyInfo;
