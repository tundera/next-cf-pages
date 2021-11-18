import type { Team } from 'types'

import { useQuery } from 'react-query'

import { getTeamByCode } from 'src/lib/teams'

const useTeam = (code: string) => {
  return useQuery<Team, Error>(['Team', { abbreviation: code }], () => getTeamByCode(code))
}

export default useTeam
