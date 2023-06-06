// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import spiderman from '../Poster/images/spiderman.jpeg'

import { Slider, type SliderProps } from './Slider'

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template = (args: SliderProps) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Most  Popular',
  slideSize: 'small',
  viewAllLink: '/movies',
  slides: [
    {
      src: spiderman,
      alt: 'Hocus Pocus',
    },
    {
      src: spiderman,
      alt: 'Hocus Pocus',
    },
    {
      src: spiderman,
      alt: 'Hocus Pocus',
    },
    {
      src: spiderman,
      alt: 'Hocus Pocus',
    },
  ],
  // args
}
