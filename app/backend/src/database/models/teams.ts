import { Model, DataTypes } from 'sequelize';
import db from '.';

class teams extends Model {
  teamName: string;
}

teams.init({
  teamName: DataTypes.STRING,
}, {
  sequelize: db,
  underscored: true,
  tableName: 'teams',
  timestamps: false,
});

export default teams;
