import type { Player } from 'types'

import Image from 'next/image'

import useTeam from 'src/hooks/useTeam'

type PlayerCardProps = {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { isError, data, error } = useTeam(player.ta)

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <article className="flex flex-col justify-end bg-white dark:bg-gray-900 shadow-2xl w-80 h-48 relative">
      <Image
        src={data?.logo as string}
        alt="Team image"
        layout="fill"
        objectFit="cover"
        className="opacity-10 -translate-x-4"
      />
      <div className="pt-2">
        <div className="flex items-end justify-evenly mx-4">
          <Image
            src={player.headshot}
            alt="Team image"
            layout="fixed"
            width={120}
            height={120}
            objectFit="cover"
          />
          <div className="ml-2">
            <p className="text-sm md:text-md font-medium w-full text-gray-500 dark:text-gray-400 tracking-tight">
              #{player.num} | {player.pos}
            </p>
            <p className="text-md md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {player.fn} {player.ln}
            </p>
          </div>
          <div className="self-start">
            <Image
              src={data?.logo as string}
              alt="Team logo"
              layout="fixed"
              width={50}
              height={50}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-3 divide-x-2 divide-black text-gray-800 dark:text-gray-200 border-t-4"
        style={{ borderTopColor: data?.color }}
      >
        <div className="text-center py-1">
          <p className="text-xs font-bold uppercase">PPG</p>
          <p className="text-xs">{player.pts ?? '---'}</p>
        </div>
        <div className="text-center py-1">
          <p className="text-xs font-bold uppercase">RPG</p>
          <p className="text-xs">{player.reb ?? '---'}</p>
        </div>
        <div className="text-center py-1">
          <p className="text-xs font-bold uppercase">APG</p>
          <p className="text-xs">{player.ast ?? '---'}</p>
        </div>
      </div>
    </article>
  )
}

export default PlayerCard
