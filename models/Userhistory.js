import { DataTypes, Model } from 'sequelize';
import Users from './Users';
import sequelize from '../services/sequelize';

class Userhistory extends Model {

}
Userhistory.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  registration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  users_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  dentist_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  toot: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
  },
},
{
  sequelize,
  modelName: 'userhistory',
  tableName: 'history',
});

Users.hasOne(Userhistory, {
  foreignKey: 'users_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'user_history',
});

Userhistory.belongsTo(Users, {
  foreignKey: 'users_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'history_user',
});

Users.hasOne(Userhistory, {
  foreignKey: 'dentist_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'dentist_history',
});

Userhistory.belongsTo(Users, {
  foreignKey: 'dentist_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'history_dentist',

});
// Userhistory.hasMany(Historyfiles, {
//   foreignKey: 'history_id',
//   onDelete: 'cascade',
//   onUpdate: 'cascade',
//   as: 'u_h_f',
// });
export default Userhistory;
/* CREATE TABLE `history` (
  `id` bigint(20) NOT NULL,
  `users_id` bigint(20) DEFAULT NULL,
  `dentist_id` bigint(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `registration` date DEFAULT NULL,
  `tooth` int(11) DEFAULT NULL */
