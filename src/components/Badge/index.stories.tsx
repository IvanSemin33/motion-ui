import {
  color,
  ECategories,
  height,
  isFetching,
  node,
  position,
  variant,
  width,
} from '../../utils/argTypes'

import Badge, { EBadgeColors, EBadgePositions, EBadgeVariants } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    animation: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to use animation',
      table: {
        category: ECategories.APPEARANCE,
        defaultValue: {
          summary: false,
        },
      },
    },
    borderWidth: {
      description: 'Border width.',
      control: {
        type: 'range',
        min: 0,
        max: 3,
        step: 1,
      },
      table: {
        category: ECategories.APPEARANCE,
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    children: node({
      description: 'The badge will be added relative to this node.',
      required: true,
    }),
    color: color({
      colors: EBadgeColors,
      defaultValue: EBadgeColors.SECONDARY,
      typeName: 'EBadgeColors',
    }),
    content: node({
      description: 'The content rendered within the badge.',
      required: false,
    }),
    height: height({
      defaultValue: 20,
      minValue: 6,
      maxValue: 20,
    }),
    width: width({
      defaultValue: 20,
      minValue: 6,
      maxValue: 20,
    }),
    invisible: {
      control: 'boolean',
      description: 'If true, the badge is invisible.',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
    },
    isFetching,
    max: {
      control: 'number',
      description: 'Max count to show.',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 99 },
      },
    },
    position: position({
      positions: EBadgePositions,
      defaultValue: EBadgePositions.TOP_RIGHT,
      typeName: 'EBadgePositions',
    }),
    variant: variant({
      variants: EBadgeVariants,
      defaultValue: EBadgeVariants.STANDARD,
      typeName: 'EBadgeVariants',
    }),
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => {
  return (
    <Badge {...args}>
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'darkcyan',
          borderRadius: '4px',
        }}
      />
    </Badge>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  color: EBadgeColors.SECONDARY,
  height: 20,
  width: 20,
  invisible: false,
  isFetching: false,
  position: EBadgePositions.TOP_RIGHT,
  variant: EBadgeVariants.STANDARD,
  content: 100,
}

export const Dot = Template.bind({})
Standard.args = {
  color: EBadgeColors.SECONDARY,
  height: 20,
  invisible: false,
  isFetching: false,
  position: EBadgePositions.TOP_RIGHT,
  variant: EBadgeVariants.DOT,
}

export const Border = Template.bind({})
Border.args = {
  ...Standard.args,
  borderWidth: 3,
}

export const Animation = Template.bind({})
Animation.args = {
  ...Standard.args,
  animation: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
