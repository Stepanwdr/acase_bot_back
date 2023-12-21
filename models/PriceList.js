import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
import Clinic from './Clinic';
// import Users from './Users';
// import Users from './Users';

class PriceList extends Model {

}
PriceList.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
  sequelize,
  modelName: 'pricelist',
  tableName: 'price_list',
});
PriceList.belongsTo(Clinic, {
  foreignKey: 'clinic_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'price_clinic',
});

Clinic.hasMany(PriceList, {
  foreignKey: 'clinic_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'clinic_price_list',
});
export default PriceList;
