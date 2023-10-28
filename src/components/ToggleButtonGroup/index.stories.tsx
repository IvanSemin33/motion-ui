import { useState } from 'react'

import {
  className,
  color,
  disabled,
  ECategories,
  isFetching,
  label,
  node,
  size,
  variant,
} from '../../utils/argTypes'
import ToggleButton from '../ToggleButton'

import ToggleButtonGroup, {
  EToggleButtonGroupColors,
  EToggleButtonGroupSizes,
  EToggleButtonGroupVariants,
  IToggleButtonGroupProps,
} from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/ToggleButtonGroup',
  // component: ToggleButtonGroup,
  subcomponents: { ToggleButton },
  zeplinLink: 'https://zpl.io/p1Q1PEy',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    children: node({
      description: 'The content of the group. Should be `ToggleButton` components.',
      required: true,
    }),
    className,
    color: color({
      colors: EToggleButtonGroupColors,
      defaultValue: EToggleButtonGroupColors.PRIMARY,
      typeName: 'EToggleButtonGroupColors',
    }),
    customColor: {
      control: {
        type: 'color',
      },
      description: 'The custom color HEX to use for the buttons',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    disabled,
    exclusive: {
      control: {
        type: 'boolean',
      },
      description: 'If `true`, only one button can be selected at a time',
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    isFetching,
    label,
    loading: {
      control: {
        type: 'boolean',
      },
      description: 'If `true`, the buttons will be in loading state',
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the value changes',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: '(value: string | string[]) => void',
        },
      },
    },
    size: size({
      sizes: EToggleButtonGroupSizes,
      defaultValue: EToggleButtonGroupSizes.MEDIUM,
      typeName: 'EToggleButtonGroupSizes',
    }),
    value: {
      control: {
        type: 'object',
      },
      description: 'The value of the selected button',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'string | string[]',
        },
      },
    },
    variant: variant({
      variants: EToggleButtonGroupVariants,
      defaultValue: EToggleButtonGroupVariants.CONTAINED,
      typeName: 'EToggleButtonGroupVariants',
    }),
  },
} as ComponentMeta<typeof ToggleButtonGroup>

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => {
  const { children, ...rest } = args
  const [value, setValue] = useState<IToggleButtonGroupProps['value']>('0')

  return (
    <ToggleButtonGroup {...rest} value={value} onChange={setValue} exclusive>
      {Array.from({ length: 5 }, (_, i) => (
        <ToggleButton key={i} value={i.toString()}>
          {`Option ${i + 1}`}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export const Default = Template.bind({})
Default.args = {
  variant: EToggleButtonGroupVariants.DEFAULT,
}

export const Contained = Template.bind({})
Contained.args = {
  variant: EToggleButtonGroupVariants.CONTAINED,
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: EToggleButtonGroupVariants.OUTLINED,
}

export const Link = Template.bind({})
Link.args = {
  variant: EToggleButtonGroupVariants.LINK,
  color: EToggleButtonGroupColors.PRIMARY,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Contained.args,
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Contained.args,
  color: EToggleButtonGroupColors.ERROR,
}

export const ColorHex = Template.bind({})
ColorHex.args = {
  ...Contained.args,
  customColor: '#EB2F96',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Contained.args,
  label: 'Label',
}

export const Loading = Template.bind({})
Loading.args = {
  ...Contained.args,
  loading: true,
}

export const Multiple: ComponentStory<typeof ToggleButtonGroup> = (args) => {
  const { children, ...rest } = args
  const [value, setValue] = useState<IToggleButtonGroupProps['value']>(['0', '1'])

  return (
    <ToggleButtonGroup {...rest} value={value} onChange={setValue}>
      {Array.from({ length: 5 }, (_, i) => (
        <ToggleButton key={i} value={i.toString()}>
          {`Option ${i + 1}`}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Contained.args,
  isFetching: true,
}
