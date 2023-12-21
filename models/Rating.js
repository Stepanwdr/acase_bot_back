import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
import Clinic from './Clinic';

// import Users from './Users';

class Rating extends Model {

}
Rating.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  rating: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
},
{
  sequelize,
  modelName: 'rating',
  tableName: 'rating',
});
export default Rating;

/* CREATE TABLE `rating` (
    `id` bigint(20) NOT NULL,
    `dentist_id` bigint(20) NOT NULL,
    `clinic_id` bigint(20) NOT NULL,
    `dentist_rating` bigint(20) DEFAULT '0',
    `clinic_rating` bigint(20) DEFAULT '0'
)

 Tutorial.belongsToMany(Tag, {
  through: "tutorial_tag",
  as: "tags",
  foreignKey: "tutorial_id",
});

Tag.belongsToMany(Tutorial, {
  through: "tutorial_tag",
  as: "tutorials",
  foreignKey: "tag_id",
});
 */
