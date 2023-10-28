import { GoPlus } from "react-icons/go"

import {
  children,
  color,
  disabled,
  ECategories,
  icon,
  isFetching,
  onClick,
  size,
  variant,
} from '../../utils/argTypes'

import Button, { EButtonColors, EButtonSizes, EButtonVariants } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Button',
  // component: Button,
  zeplinLink: 'https://zpl.io/p1Q1PEy',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    children,
    color: color({
      colors: EButtonColors,
      defaultValue: EButtonColors.PRIMARY,
      typeName: 'EButtonColors',
    }),
    customColor: {
      control: {
        type: 'color',
      },
      description: 'The custom color HEX to use for the button',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
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
    IconEnd: {
      ...icon({
        description: 'The icon to display at the end of the button',
      }),
    },
    IconStart: {
      ...icon({
        description: 'The icon to display at the start of the button',
      }),
    },
    size: size({
      sizes: EButtonSizes,
      defaultValue: EButtonSizes.MEDIUM,
      typeName: 'EButtonSizes',
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
      variants: EButtonVariants,
      defaultValue: EButtonVariants.CONTAINED,
      typeName: 'EButtonVariants',
    }),
    isFetching,
    onClick,
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  const { children = 'Button', ...rest } = args
  return <Button {...rest}>{children}</Button>
}

export const Default = Template.bind({})
Default.args = {
  variant: EButtonVariants.DEFAULT,
}

export const Contained = Template.bind({})
Contained.args = {
  variant: EButtonVariants.CONTAINED,
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: EButtonVariants.OUTLINED,
}

export const Link = Template.bind({})
Link.args = {
  variant: EButtonVariants.LINK,
  color: EButtonColors.PRIMARY,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Contained.args,
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Contained.args,
  color: EButtonColors.ERROR,
}

export const IconStart = Template.bind({})
IconStart.args = {
  ...Contained.args,
  IconStart: GoPlus,
}

export const IconEnd = Template.bind({})
IconEnd.args = {
  ...Contained.args,
  IconEnd: GoPlus,
}

export const ColorHex = Template.bind({})
ColorHex.args = {
  IconEnd: GoPlus,
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
