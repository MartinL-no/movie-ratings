// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { PercentSign, type PercentSignProps } from './PercentSign'

export default {
  title: 'Components/PercentSign',
  component: PercentSign,
} as ComponentMeta<typeof PercentSign>

const Template = (args: PercentSignProps) => <PercentSign {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
