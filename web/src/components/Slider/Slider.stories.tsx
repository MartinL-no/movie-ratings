// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Slider, type SliderProps } from './Slider'

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template = (args) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
