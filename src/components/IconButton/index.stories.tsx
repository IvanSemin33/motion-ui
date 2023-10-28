import { GoPlus } from 'react-icons/go'

import {
  color,
  disabled,
  ECategories,
  icon,
  isFetching,
  onClick,
  size,
  variant,
} from '../../utils/argTypes'

import IconButton, { EIconButtonColors, EIconButtonSizes, EIconButtonVariants } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/IconButton',
  // component: IconButton,
  zeplinLink: 'https://zpl.io/p1Q1PEy',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: color({
      colors: EIconButtonColors,
      defaultValue: EIconButtonColors.PRIMARY,
      typeName: 'EIconButtonColors',
    }),
    disabled,
    href: {
      control: {
        type: 'text',
      },
      description: 'The URL to link to when the button is clicked',
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: 'string',
        },
      },
    },
    Icon: icon({
      description: 'The icon to display in the button',
    }),
    isFetching,
    size: size({
      sizes: EIconButtonSizes,
      defaultValue: EIconButtonSizes.MEDIUM,
      typeName: 'EIconButtonSizes',
    }),
    loading: {
      control: {
        type: 'boolean',
      },
      description: 'If `true`, the button will be in loading state',
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: 'boolean',
        },
      },
    },
    variant: variant({
      variants: EIconButtonVariants,
      defaultValue: EIconButtonVariants.CONTAINED,
      typeName: 'EIconButtonVariants',
    }),
    onClick,
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} Icon={GoPlus} />
}

export const Default = Template.bind({})
Default.args = {
  variant: EIconButtonVariants.DEFAULT,
}

export const Contained = Template.bind({})
Contained.args = {
  variant: EIconButtonVariants.CONTAINED,
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: EIconButtonVariants.OUTLINED,
}

export const Link = Template.bind({})
Link.args = {
  variant: EIconButtonVariants.LINK,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Contained.args,
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Contained.args,
  color: EIconButtonColors.ERROR,
}

export const ColorHex = Template.bind({})
ColorHex.args = {
  ...Contained.args,
  customColor: '#EB2F96',
}

export const Loading = Template.bind({})
Loading.args = {
  ...Contained.args,
  loading: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Contained.args,
  isFetching: true,
}
