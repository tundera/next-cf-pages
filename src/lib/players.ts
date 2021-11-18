import type { Player } from 'types'

// import players from 'data/players.json'

// export const getPlayers = async () => {
//   const data = await new Promise<Player[]>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(players)
//     }, 3000)
//   })

//   return data
// }

export const getPlayers = async () => {
  const response = await fetch('/api/players')
  const json = await response.json()

  return json.players as Player[]
}
