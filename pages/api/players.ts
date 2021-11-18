import type { NextApiRequest, NextApiResponse } from 'next'
import type { Player } from 'types'

import players from 'data/players.json'

type Data = {
  players: Player[]
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ players })
}

export default handler
