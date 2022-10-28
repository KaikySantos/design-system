import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@kaiky-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tenetur unde ullam aperiam veniam illum vero consequatur dolorem provident, magnam voluptatum mollitia quasi aspernatur culpa. Alias veniam quo excepturi rerum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
