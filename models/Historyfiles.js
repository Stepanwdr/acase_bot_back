import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
import Userhistory from './Userhistory';

class Historyfiles extends Model {
}
Historyfiles.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize,
  modelName: 'historyfiles',
  tableName: 'history_files',
});

Historyfiles.belongsTo(Userhistory, {
  foreignKey: 'history_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'history',
});

Userhistory.hasMany(Historyfiles, {
  foreignKey: 'history_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'files',
});
//
// Historyfiles.belongsTo(Userhistory, {
//   foreignKey: 'history_id',
//   onDelete: 'cascade',
//   onUpdate: 'cascade',
//   as: 'h_f',
// });

export default Historyfiles;
/* CREATE TABLE `history_files` (
  `id` bigint(20) NOT NULL,
  `history_id` bigint(20) DEFAULT NULL,
  `filepath` varchar(255) DEFAULT NULL
) */
