import { useState } from 'react'

import {
  disabled,
  ECategories,
  isFetching,
  label,
  onChange,
  size,
  variant,
} from '../../utils/argTypes'

import Radio, { ERadioShapes, ERadioSizes, ERadioVariants, IRadioProps } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the radio is checked',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled,
    isFetching,
    label,
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
    variant: variant({
      variants: ERadioVariants,
      defaultValue: ERadioVariants.FILLED,
      typeName: 'ERadioVariants',
    }),
    onChange,
  },
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => {
  const [checked, setChecked] = useState<IRadioProps['checked']>(false)

  return <Radio {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
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

export const Square = Template.bind({})
Square.args = {
  ...Standard.args,
  shape: ERadioShapes.SQUARE,
}

export const Label = Template.bind({})
Label.args = {
  ...Standard.args,
  label: 'Label',
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
