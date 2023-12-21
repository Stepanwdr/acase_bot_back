import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
import Clinic from './Clinic';
import Rating from './Rating';
import Users from './Users';

class UserClinicRating extends Model {

}
UserClinicRating.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
},
{
  sequelize,
  modelName: 'userclinicrating',
  tableName: 'userclinicrating',
});
Rating.belongsToMany(Clinic, {
  through: UserClinicRating,
  as: 'rating_cl',
});

Clinic.belongsToMany(Rating, {
  through: UserClinicRating,
  as: 'clinic_rat',
});
Rating.belongsToMany(Users, {
  through: UserClinicRating,
  onDelete: 'cascade',
  onUpdate: 'cascade',
});
Users.belongsToMany(Rating, {
  through: UserClinicRating,
  onDelete: 'cascade',
  onUpdate: 'cascade',
});

export default UserClinicRating;
