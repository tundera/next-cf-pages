import type { Player } from 'types'

import NextImage from 'next/image'
import { Box, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react'

import Image from 'src/components/Image'
import useTeam from 'src/hooks/useTeam'

type PlayerCardProps = {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { isError, data, error } = useTeam(player.ta)

  const bgColor = useColorModeValue('white', 'gray.900')
  const nameTextColor = useColorModeValue('gray.900', 'gray.100')
  const detailTextColor = useColorModeValue('gray.500', 'gray.400')
  const statsTextColor = useColorModeValue('gray.800', 'gray.200')

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <Flex
      direction="column"
      justifyContent="end"
      shadow="2xl"
      w="80"
      h="48"
      position="relative"
      bg={bgColor}
    >
      <Image
        src={data?.logo as string}
        alt="Team image"
        layout="fill"
        objectFit="cover"
        opacity={0.1}
        translateX="-4"
      />
      <Box pt="2">
        <Flex justifyContent="space-evenly" alignItems="end" mx="4">
          <Image
            src={player.headshot}
            alt="Team image"
            layout="fixed"
            width={120}
            height={120}
            objectFit="cover"
          />
          <Box ml="2">
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="medium"
              w="full"
              color={detailTextColor}
              letterSpacing="tight"
            >
              #{player.num} | {player.pos}
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="medium"
              w="full"
              mb={{ base: '6', sm: '10' }}
              color={nameTextColor}
              letterSpacing="tight"
            >
              {player.fn} {player.ln}
            </Text>
          </Box>
          <Box>
            <Image
              src={data?.logo as string}
              alt="Team logo"
              layout="fixed"
              width={50}
              height={50}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Grid
        templateColumns="3"
        color={statsTextColor}
        borderRightWidth="2"
        borderLeftWidth="2"
        borderColor="black"
        borderTopWidth="4"
        borderTopColor={data?.color}
      >
        <Box textAlign="center" py="1">
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">
            PPG
          </Text>
          <Text fontSize="xs">{player.pts ?? '---'}</Text>
        </Box>
        <Box textAlign="center" py="1">
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">
            RPG
          </Text>
          <Text fontSize="xs">{player.reb ?? '---'}</Text>
        </Box>
        <Box textAlign="center" py="1">
          <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">
            APG
          </Text>
          <Text fontSize="xs">{player.ast ?? '---'}</Text>
        </Box>
      </Grid>
    </Flex>
  )
}

export default PlayerCard
