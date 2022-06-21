import { Model, DataTypes } from 'sequelize';
import db from '.';
import matches from './matches';

class teams extends Model {
  id: number;
  teamName: string;
}

teams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: DataTypes.STRING,
}, {
  sequelize: db,
  underscored: true,
  tableName: 'teams',
  timestamps: false,
});

matches.belongsTo(teams, { foreignKey: 'homeTeam', as: 'teamHome' });
matches.belongsTo(teams, { foreignKey: 'awayTeam', as: 'teamAway' });

teams.hasMany(matches, { foreignKey: 'homeTeam', as: 'teamHome' });
teams.hasMany(matches, { foreignKey: 'awayTeam', as: 'teamAway' });

export default teams;
