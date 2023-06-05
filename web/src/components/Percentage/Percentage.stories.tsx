// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Percentage> = (args) => {
//   return <Percentage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Percentage from './Percentage'

export const generated = () => {
  return <Percentage />
}

export default {
  title: 'Components/Percentage',
  component: Percentage,
} as ComponentMeta<typeof Percentage>
