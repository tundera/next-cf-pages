import type { ErrorFallbackProps } from 'types'

import { Flex, Box, Code, Button, Text } from '@chakra-ui/react'

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" w="full" h="auto">
      <Text fontSize="lg">An error occured. See the message below for details.</Text>
      <Box>
        <Code>{error.message}</Code>
      </Box>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Flex>
  )
}

export default ErrorFallback
