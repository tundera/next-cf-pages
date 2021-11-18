import type { NextApiRequest, NextApiResponse } from 'next'
import type { Team } from 'types'

import teams from 'data/teams.json'

type Data = {
  teams: Team[]
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ teams })
}

export default handler
