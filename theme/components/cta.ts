const CTA = {
  parts: ['wrapper', 'title', 'action', 'secondaryAction'],
  baseStyle: {
    wrapper: {
      pt: 28,
      pb: 28,
    },
    action: {
      colorScheme: 'cyan',
    },
    secondaryAction: {
      colorScheme: 'cyan',
      variant: 'ghost',
    },
  },
  variants: {
    subtle: {},
    solid: {
      wrapper: {
        bg: 'cyan.400',
      },
      secondaryAction: {
        colorScheme: 'white',
      },
    },
    light: ({ colorMode }: any) => ({
      wrapper: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default CTA
