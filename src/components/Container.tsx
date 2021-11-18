import type { FC } from 'react'

import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import {
  Icon,
  Flex,
  Box,
  Button,
  Stack,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import Footer from 'src/components/Footer'

const Container: FC = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const themeToggleColor = useColorModeValue('gray.800', 'gray.200')
  const navTextColor = useColorModeValue('gray.900', 'gray.100')
  const navBorderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <Flex direction="column" px="8" minH="100vh">
        <Flex
          as="nav"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          maxW="4xl"
          w="full"
          mx="auto"
          pt="8"
          pb={{ base: '8', sm: '16' }}
          color={navTextColor}
          borderColor={navBorderColor}
          opacity={0.6}
        >
          <Link href="#skip">Skip to content</Link>
          <Box ml="-2.5"></Box>
          <Button
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="9"
            h="9"
            _hover={{ ring: 2, ringColor: 'gray.300', transitionProperty: 'all' }}
          >
            {colorMode === 'light' ? (
              <Icon as={FiMoon} w="5" h="5" color={themeToggleColor} />
            ) : (
              <Icon as={FiSun} w="5" h="5" color={themeToggleColor} />
            )}
          </Button>
        </Flex>
        <Flex as="main" direction="column" justifyContent="center" px="8" id="skip">
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Box>
  )
}

export default Container
