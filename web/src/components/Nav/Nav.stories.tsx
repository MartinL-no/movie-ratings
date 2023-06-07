// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Nav, type NavProps } from './Nav'

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>

const Template = (args) => <Nav {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
