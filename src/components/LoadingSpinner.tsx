import { Spinner, useColorModeValue } from '@chakra-ui/react'

const LoadingSpinner = () => {
  const color = useColorModeValue('black', 'white')
  const emptyColor = useColorModeValue('gray.200', 'gray.800')

  return <Spinner emptyColor={emptyColor} color={color} thickness="4px" size="xl" speed="0.65s" />
}

export default LoadingSpinner
