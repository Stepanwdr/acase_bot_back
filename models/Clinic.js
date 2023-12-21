import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
// import Users from './Users';

class Clinic extends Model {

}
Clinic.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.CHAR(32),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
},
{
  sequelize,
  modelName: 'clinic',
  tableName: 'clinic',
});

export default Clinic;
/*
* CREATE TABLE `clinic` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
*/
