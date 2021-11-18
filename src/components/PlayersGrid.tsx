import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Flex, Grid } from '@chakra-ui/react'

import IntersectionSlide from 'src/components/IntersectionSlide'
import usePlayers from 'src/hooks/usePlayers'

const PlayerCard = dynamic(() => import('src/components/PlayerCard'), { suspense: true })

const PlayersGrid = () => {
  const { isError, data, error } = usePlayers()

  if (isError) {
    return (
      <Flex direction="column" justifyContent="center" alignItems="center">
        <span>Error: {(error as Error).message}</span>
      </Flex>
    )
  }

  return (
    <Grid
      templateColumns={{ base: '1', md: '2', lg: '3' }}
      justifyItems="center"
      rowGap="32"
      columnGap="16"
    >
      {data?.map((player) => (
        <IntersectionSlide key={player.slug}>
          <Suspense
            fallback={
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                bg="gray.300"
                w="80"
                h="48"
              />
            }
          >
            <PlayerCard player={player} />
          </Suspense>
        </IntersectionSlide>
      ))}
    </Grid>
  )
}

export default PlayersGrid
