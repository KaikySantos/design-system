import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@kaiky-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tenetur unde ullam aperiam veniam illum vero consequatur dolorem provident, magnam voluptatum mollitia quasi aspernatur culpa. Alias veniam quo excepturi rerum.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
