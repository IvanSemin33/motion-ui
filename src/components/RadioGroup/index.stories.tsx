import { useState } from 'react'

import { disabled, ECategories, isFetching, onChange, size, variant } from '../../utils/argTypes'
import Radio, { ERadioShapes, ERadioSizes, ERadioVariants } from '../Radio'

import RadioGroup, { IRadioGroupProps } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  subcomponents: { Radio },
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    disabled,
    isFetching,
    onChange,
    options: {
      control: {
        type: 'object',
      },
      description: 'The options of the radio group',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'RadioGroupOption[]',
        },
      },
    },
    row: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the radio group is in a row',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
      },
    },
    shape: {
      control: {
        type: 'radio',
        options: Object.values(ERadioShapes),
      },
      description: 'The shape of the radio',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'ERadioShapes',
        },
        defaultValue: {
          summary: ERadioShapes.CIRCLE,
        },
      },
    },
    size: size({
      sizes: ERadioSizes,
      defaultValue: ERadioSizes.MEDIUM,
      typeName: 'ERadioSizes',
    }),
    value: {
      control: {
        type: 'object',
      },
      description: 'The value of the radio group',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'RadioGroupOption | null',
        },
      },
    },
    variant: variant({
      variants: ERadioVariants,
      defaultValue: ERadioVariants.FILLED,
      typeName: 'ERadioVariants',
    }),
  },
} as ComponentMeta<typeof RadioGroup>

const options = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
  {
    value: '3',
    label: 'Option 3',
  },
]

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState<IRadioGroupProps['value']>(null)

  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={(e, value) => setValue(value)}
      options={options}
    />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  disabled: false,
  size: ERadioSizes.MEDIUM,
  variant: ERadioVariants.STANDARD,
  shape: ERadioShapes.CIRCLE,
}

export const Filled = Template.bind({})
Filled.args = {
  ...Standard.args,
  variant: ERadioVariants.FILLED,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Standard.args,
  variant: ERadioVariants.OUTLINED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Standard.args,
  disabled: true,
}

export const Row = Template.bind({})
Row.args = {
  ...Standard.args,
  row: true,
}

export const Square = Template.bind({})
Square.args = {
  ...Standard.args,
  shape: ERadioShapes.SQUARE,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
