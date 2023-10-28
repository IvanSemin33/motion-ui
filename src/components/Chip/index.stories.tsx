import { GoHeart } from "react-icons/go";


import {
  color,
  disabled,
  ECategories,
  icon,
  isFetching,
  label,
  onClick,
  size,
  variant,
} from '../../utils/argTypes'

import Chip, { EChipColors, EChipSizes, EChipVariants } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: color({
      colors: EChipColors,
      defaultValue: EChipColors.PRIMARY,
      typeName: 'EChipColors',
    }),
    disabled,
    Icon: icon({
      description: 'Icon to be displayed on the left side of the chip',
    }),
    label,
    onClick,
    onDelete: {
      action: 'onDelete',
      description: 'Callback fired when the delete icon is clicked',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: 'function',
        },
      },
    },
    size: size({
      sizes: EChipSizes,
      defaultValue: EChipSizes.MEDIUM,
      typeName: 'EChipSizes',
    }),
    variant: variant({
      variants: EChipVariants,
      defaultValue: EChipVariants.FILLED,
      typeName: 'EChipVariants',
    }),
    isFetching,
  },
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />
}

export const Filled = Template.bind({})
Filled.args = {
  label: 'Chip',
  color: EChipColors.PRIMARY,
  disabled: false,
  size: EChipSizes.MEDIUM,
  variant: EChipVariants.FILLED,
  // only for storybook
  onClick: undefined,
  onDelete: undefined,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Filled.args,
  variant: EChipVariants.OUTLINED,
}

export const Clickable = Template.bind({})
Clickable.args = {
  ...Filled.args,
  onClick: () => ({}),
}

export const Deletable = Template.bind({})
Deletable.args = {
  ...Filled.args,
  onDelete: () => ({}),
}

export const Icon = Template.bind({})
Icon.args = {
  ...Filled.args,
  Icon: GoHeart,
}

export const IconClickableDeletable = Template.bind({})
IconClickableDeletable.args = {
  ...Filled.args,
  Icon: GoHeart,
  onClick: () => ({}),
  onDelete: () => ({}),
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Filled.args,
  isFetching: true,
}
