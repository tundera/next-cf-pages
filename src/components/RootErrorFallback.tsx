import type { ErrorFallbackProps } from 'types'

import { Flex, Box, Code, Text, Button } from '@chakra-ui/react'

const RootErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" minH="100vh" w="full">
      <Text fontSize="2xl">App failed to load. See the message below for details.</Text>
      <Box>
        <Code>{error.message}</Code>
      </Box>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Flex>
  )
}

export default RootErrorFallback
