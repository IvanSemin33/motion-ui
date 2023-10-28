import { useState } from 'react'

import {
  color,
  disabled,
  ECategories,
  icon,
  isFetching,
  label,
  onChange,
  onClick,
  variant,
} from '../../utils/argTypes'

import TextArea, { ETextAreaColors, ETextAreaVariants, ITextAreaProps } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: color({
      colors: ETextAreaColors,
      defaultValue: ETextAreaColors.PRIMARY,
      typeName: 'ETextAreaColors',
    }),
    disabled,
    helperText: {
      control: {
        type: 'text',
      },
      description: 'The helper text to display below the input',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    IconEnd: icon({
      description: 'The icon to display at the end of the input',
    }),
    IconStart: icon({
      description: 'The icon to display at the start of the input',
    }),
    isFetching,
    label,
    rows: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      description: 'The number of textarea rows',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 2,
        },
      },
    },
    variant: variant({
      variants: ETextAreaVariants,
      defaultValue: ETextAreaVariants.FILLED,
      typeName: 'ETextAreaVariants',
    }),
    onClick,
    onChange,
  },
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState<ITextAreaProps['value']>('')

  return (
    <TextArea
      {...args}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder="Placeholder"
    />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  variant: ETextAreaVariants.STANDARD,
  rows: 2,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Standard.args,
  variant: ETextAreaVariants.OUTLINED,
}

export const Filled = Template.bind({})
Filled.args = {
  ...Standard.args,
  variant: ETextAreaVariants.FILLED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Standard.args,
  disabled: true,
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Standard.args,
  label: 'Label',
}

export const HelperText = Template.bind({})
HelperText.args = {
  ...Standard.args,
  helperText: 'Helper text',
}

export const Success = Template.bind({})
Success.args = {
  ...Standard.args,
  color: ETextAreaColors.SUCCESS,
}

export const Error = Template.bind({})
Error.args = {
  ...Standard.args,
  color: ETextAreaColors.ERROR,
}

export const ErrorText = Template.bind({})
ErrorText.args = {
  ...Error.args,
  helperText: 'Error text',
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
