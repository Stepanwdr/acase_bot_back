import { DataTypes, Model } from 'sequelize';
import Clinic from './Clinic';
import sequelize from '../services/sequelize';
import Users from './Users';

class Appointment extends Model {

}
Appointment.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  users_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  dentist_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  clinic_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
  notes: {
    type: DataTypes.TEXT,
  },
},
{
  sequelize,
  modelName: 'appointment',
  tableName: 'appointment',
});

Users.hasMany(Appointment, {
  foreignKey: 'users_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'u_id',
});

Appointment.belongsTo(Users, {
  foreignKey: 'users_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'app',

});

Users.hasMany(Appointment, {
  foreignKey: 'dentist_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'us_dentist_id',
});

Appointment.belongsTo(Users, {
  foreignKey: 'dentist_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'd_id',

});
Clinic.hasMany(Appointment, {
  foreignKey: 'clinic_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'clinic_app',
});

Appointment.belongsTo(Clinic, {
  foreignKey: 'clinic_id',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'appointment_clinic',

});

export default Appointment;

/* `id` bigint(20) NOT NULL,
  `users_id` bigint(20) DEFAULT NULL,
  `dentist_id` bigint(20) DEFAULT NULL,
  `clinic_id` bigint(20) DEFAULT NULL,
  `appointment` datetime DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` enum('canceld','active','done') DEFAULT NULL */
