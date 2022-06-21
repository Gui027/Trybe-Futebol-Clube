export interface leadeboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}

export interface matchGoals {
  goalsFavor: number,
  goalsOwn: number,
}

export interface matchCreate {
  id: number,
  teamName: string,
  game: matchGoals[]
}
