import type { Player } from 'types'

import players from 'data/players.json'

export const getPlayers = async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(players)
    }, 3000)
  })

  return data
}

const usePlayersData = () => {
  const getPlayersData = () => {
    throw getPlayers()
  }

  return { data: getPlayersData() }
}

export default usePlayersData
