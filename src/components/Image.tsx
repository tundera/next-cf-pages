import type { ComponentProps } from 'react'

import NextImage from 'next/image'

import { Box, chakra } from '@chakra-ui/react'

const NextChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader '].includes(
      prop,
    ),
})

const Image = (props: ComponentProps<typeof NextChakraImage>) => {
  const { src, alt, loader, width, height, quality, ...rest } = props
  return (
    <Box pos="relative" cursor="pointer" {...rest}>
      <NextChakraImage
        loader={loader}
        width={width}
        quality={quality}
        height={height}
        src={src}
        alt={alt}
      />
    </Box>
  )
}

export default Image
