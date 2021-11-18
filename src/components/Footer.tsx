import { Flex, Divider, Grid, useColorModeValue } from '@chakra-ui/react'

import Link from 'src/components/Link'

const Footer = () => {
  const dividerColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <Flex
      as="footer"
      direction="column"
      justifyContent="center"
      alignItems="start"
      maxW="4xl"
      w="full"
      mx="auto"
      mb="8"
    >
      <Divider w="full" height="1" color={dividerColor} mb="8" />
      <Grid templateColumns={{ base: '1', sm: '3' }} gap="4" maxW="4xl" w="full" pb="16">
        <Flex direction="column" experimental_spaceY="4">
          <Link href="/" color="gray.500" _hover={{ color: 'gray.600' }}>
            Home
          </Link>
          <Link href="/about" color="gray.500" _hover={{ color: 'gray.600' }}>
            About
          </Link>
          <Link href="/newsletter" color="gray.500" _hover={{ color: 'gray.600' }}>
            Newsletter
          </Link>
        </Flex>
        <Flex direction="column" experimental_spaceY="4">
          <Link href="https://twitter.com/tunderadev" isExternal>
            Twitter
          </Link>
          <Link href="https://github.com/tundera" isExternal>
            GitHub
          </Link>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Footer
