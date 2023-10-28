import { color, isFetching, size } from '../../utils/argTypes'

import CircularProgress, { ECircularProgressColor, ECircularProgressSize } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/CircularProgress',
  // component: CircularProgress,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: color({
      colors: ECircularProgressColor,
      defaultValue: ECircularProgressColor.PRIMARY,
      typeName: 'ECircularProgressColor',
    }),
    isFetching,
    size: size({
      sizes: ECircularProgressSize,
      defaultValue: ECircularProgressSize.MEDIUM,
      typeName: 'ECircularProgressSize',
    }),
  },
} as ComponentMeta<typeof CircularProgress>

const Template: ComponentStory<typeof CircularProgress> = (args) => {
  return <CircularProgress {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  color: ECircularProgressColor.PRIMARY,
  size: ECircularProgressSize.MEDIUM,
  value: 33,
}

export const Error = Template.bind({})
Error.args = {
  ...Primary.args,
  color: ECircularProgressColor.ERROR,
}

export const Success = Template.bind({})
Success.args = {
  ...Primary.args,
  color: ECircularProgressColor.SUCCESS,
}

export const Small = Template.bind({})
Small.args = {
  ...Primary.args,
  size: ECircularProgressSize.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  ...Primary.args,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Primary.args,
  isFetching: true,
}
