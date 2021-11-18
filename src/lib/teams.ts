import type { Team } from 'types'

export const getTeams = async () => {
  const response = await fetch('/api/teams')
  const json = await response.json()

  return json.teams as Team[]
}

export const getTeamByCode = async (code: string) => {
  const teams = await getTeams()

  return teams.find((team) => team.ta === code) as Team
}
