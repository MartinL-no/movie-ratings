// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { IconButton, type IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template = (args: IconButtonProps) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
