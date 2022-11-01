import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@kaiky-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
