import type { PropsWithChildren } from 'react'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

type LinkProps =
  | PropsWithChildren<NextLinkProps & Omit<ChakraLinkProps, 'as'>>
  | PropsWithChildren<Omit<NextLinkProps, 'as'> & ChakraLinkProps>

type NextLinkAs = NextLinkProps['as']
type ChakraLinkAs = ChakraLinkProps['as']

const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  isExternal,
  children,
  ...chakraProps
}: LinkProps) => {
  return isExternal ? (
    <ChakraLink href={href} as={as as ChakraLinkAs} isExternal {...chakraProps}>
      {children}
    </ChakraLink>
  ) : (
    <NextLink
      passHref={true}
      href={href}
      as={as as NextLinkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
    >
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
