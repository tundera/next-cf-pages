import type { Player } from 'types'

export const getPlayers = async () => {
  const response = await fetch('/api/players')
  const json = await response.json()

  return json.players as Player[]
}
