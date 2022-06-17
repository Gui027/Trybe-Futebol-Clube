import matches from '../database/models/matches';

const patchMatchesService = async (id:string) => {
  const match = await matches.update({ inProgress: false }, { where: { id } });
  if (!match) {
    throw new Error('math is not inProgress');
  }

  return 'Finished';
};

export default {
  patchMatchesService,
};
