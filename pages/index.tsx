import type { NextPage } from 'next'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Heading, Stack, useColorModeValue } from '@chakra-ui/react'

import Container from 'src/components/Container'
import LoadingSpinner from 'src/components/LoadingSpinner'

const PlayersGrid = dynamic(() => import('src/components/PlayersGrid'), { suspense: true })

const Home: NextPage = () => {
  const headingColor = useColorModeValue('gray.700', 'gray.200')
  const subheadingColor = useColorModeValue('black', 'white')

  return (
    <Container>
      <Stack alignItems="center">
        <Heading
          as="h1"
          mb="4"
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="bold"
          letterSpacing="tight"
          color={headingColor}
        >
          NBA Demo
        </Heading>
        <Heading as="h2" mb="12" fontSize="xl" color={subheadingColor}>
          Made with Next.js, TailwindCSS, and React Query
        </Heading>
        <Suspense fallback={<LoadingSpinner />}>
          <PlayersGrid />
        </Suspense>
      </Stack>
    </Container>
  )
}

export default Home
