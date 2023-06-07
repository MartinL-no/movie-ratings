// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Slide, type SlideProps } from './Slide'

export default {
  title: 'Components/Slide',
  component: Slide,
} as ComponentMeta<typeof Slide>

const Template = (args: SlideProps) => <Slide {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
