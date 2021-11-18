import { Center } from '@chakra-ui/react'

import LoadingSpinner from 'src/components/LoadingSpinner'

const FullPageSpinner = () => {
  return (
    <Center minH="100vh" w="full">
      <LoadingSpinner />
    </Center>
  )
}

export default FullPageSpinner
