import type { Team } from 'types'

import teams from 'data/teams.json'

const getTeams = async () => {
  const data = await new Promise<Team[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(teams)
    }, 3000)
  })

  return data
}

const getTeamByCode = async (code: string) => {
  const teams = await getTeams()

  return teams.find((team) => team.ta === code) as Team
}

const useTeamData = (code: string) => {
  const getTeamData = () => {
    throw getTeamByCode(code)
  }

  const data = getTeamData()

  return { data }
}

export default useTeamData
