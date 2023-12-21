import { Model, DataTypes } from 'sequelize';
import md5 from 'md5';
import sequelize from '../services/sequelize';

class Users extends Model {
  static passwordHash(string) {
    return md5(`${md5(string)}_safe`);
  }
}
Users.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chat_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  join_date: {
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  modelName: 'users',
  tableName: 'users',
});

// Users.belongsTo(Clinic, {
//   foreignKey: 'clinic_id',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
//   as: 'clinic',
// });
//
// Clinic.hasMany(Users, {
//   foreignKey: 'clinic_id',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
//   as: 'users',
// });

export default Users;
/*
`id` bigint(20) NOT NULL,
  `clinic_id` bigint(20) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `address` varchar(255) NOT NULL,
  `birthDate` date DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL */
