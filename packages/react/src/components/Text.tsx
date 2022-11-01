import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variant: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$' },
      '4xl': { fontSize: '$' },
      '5xl': { fontSize: '$' },
      '6xl': { fontSize: '$' },
      '7xl': { fontSize: '$' },
      '8xl': { fontSize: '$' },
      '9xl': { fontSize: '$' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> { }