import teams from '../database/models/teams';
import matches from '../database/models/matches';

const getMatches = async () => {
  const viewMatches = await matches.findAll(
    {
      include: [
        {
          model: teams,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        { model: teams,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    },
  );

  return viewMatches;
};

const inProgressFilter = async (inProgress: string) => {
  let progress = false;
  if (inProgress === 'true') progress = true;
  const matchesWithInProgress = await matches.findAll({
    include: [
      {
        model: teams,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      { model: teams,
        as: 'teamAway',
        attributes: ['teamName'],
      },
    ],
    where: { inProgress: progress },
  });

  return matchesWithInProgress;
};

export default {
  getMatches,
  inProgressFilter,
};
