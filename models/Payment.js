import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';

import Users from './Users';
import Clinic from './Clinic';

class Payment extends Model {

}
Payment.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },

  amount: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
  },
},
{
  sequelize,
  modelName: 'payment',
  tableName: 'payment',
});

Payment.belongsTo(Clinic, {
  foreignKey: 'clinic_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'payment_c',
});

Clinic.hasMany(Payment, {
  foreignKey: 'clinic_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'c_payment',
});
Payment.belongsTo(Users, {
  foreignKey: ' users_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'payment_u',
});

Users.hasMany(Payment, {
  foreignKey: ' users_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'u_payment',
});
Payment.belongsTo(Users, {
  foreignKey: 'dentist_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'payment_d',
});

Users.hasMany(Payment, {
  foreignKey: 'dentist_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'd_payment',
});
export default Payment;

/* CREATE TABLE `payment` (
  `id` bigint(20) NOT NULL,
  `users_id` bigint(20) DEFAULT NULL,
  `dentist_id` bigint(20) DEFAULT NULL,
  `clinic_id` bigint(20) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL
) */
