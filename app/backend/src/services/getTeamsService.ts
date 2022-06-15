import teams from '../database/models/teams';

const getTeams = async () => {
  const viewTeams = await teams.findAll({ raw: true });

  return viewTeams;
};

export default {
  getTeams,
};
