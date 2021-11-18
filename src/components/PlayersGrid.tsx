import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import IntersectionSlide from 'src/components/IntersectionSlide'
import usePlayers from 'src/hooks/usePlayers'

const PlayerCard = dynamic(() => import('src/components/PlayerCard'), { suspense: true })

const PlayersGrid = () => {
  const { isError, data, error } = usePlayers()

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center">
        <span>Error: {(error as Error).message}</span>
      </div>
    )
  }

  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
      {data?.map((player) => (
        <IntersectionSlide key={player.slug}>
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center bg-gray-300 animate-pulse w-80 h-48"></div>
            }
          >
            <PlayerCard player={player} />
          </Suspense>
        </IntersectionSlide>
      ))}
    </div>
  )
}

export default PlayersGrid
