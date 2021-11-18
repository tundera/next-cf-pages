import type { NextPage } from 'next'

import dynamic from 'next/dynamic'

import Container from 'src/components/Container'
import { Suspense } from 'react'
import LoadingSpinner from 'src/components/LoadingSpinner'

const PlayersGrid = dynamic(() => import('src/components/PlayersGrid'), { suspense: true })

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          NBA Demo
        </h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-200 mb-12">
          Made with Next.js, TailwindCSS, and React Query
        </h2>
        <Suspense fallback={<LoadingSpinner />}>
          <PlayersGrid />
        </Suspense>
      </div>
    </Container>
  )
}

export default Home
