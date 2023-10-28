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

import Checkbox, { ECheckboxSizes, ECheckboxVariants, ICheckboxProps } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  zeplinLink: 'https://zpl.io/noNWnXY',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is checked',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled,
    indeterminate: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is indeterminate',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
      },
    },
    label,
    size: size({
      sizes: ECheckboxSizes,
      defaultValue: ECheckboxSizes.MEDIUM,
      typeName: 'ECheckboxSizes',
    }),
    variant: variant({
      variants: ECheckboxVariants,
      defaultValue: ECheckboxVariants.FILLED,
      typeName: 'ECheckboxVariants',
    }),
    isFetching,
    onChange,
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false)

  return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

export const Filled = Template.bind({})
Filled.args = {
  disabled: false,
  size: ECheckboxSizes.MEDIUM,
  variant: ECheckboxVariants.FILLED,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Filled.args,
  variant: ECheckboxVariants.OUTLINED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Filled.args,
  disabled: true,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  ...Filled.args,
  indeterminate: true,
}

export const Label = Template.bind({})
Label.args = {
  ...Filled.args,
  label: 'Label',
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Filled.args,
  isFetching: true,
}
