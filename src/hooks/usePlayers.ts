import type { Player } from 'types'

import { useQuery } from 'react-query'

import { getPlayers } from 'src/lib/players'

const usePlayers = () => {
  return useQuery<Player[], Error>('Player', getPlayers)
}

export default usePlayers
