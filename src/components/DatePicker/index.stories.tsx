import { useState } from 'react'

import { enGB } from 'date-fns/locale'

import { className, disabled, ECategories, isFetching, label, variant } from '../../utils/argTypes'

import DatePicker, { EDatePickerLabelPlacements, EDatePickerVariants, IDatePickerProps } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Date Picker',
  // component: DatePicker,
  argTypes: {
    className,
    disabled,
    label,
    labelPlacement: {
      control: {
        type: 'radio',
        options: Object.values(EDatePickerLabelPlacements),
      },
      description: 'The position of the label.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'EDatePickerLabelPlacements',
          detail: Object.values(EDatePickerLabelPlacements).join(' | '),
        },
        defaultValue: {
          summary: EDatePickerLabelPlacements.TOP,
        },
      },
    },
    locale: {
      control: {
        type: 'object',
      },
      description: 'The locale object.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'Locale',
        },
        defaultValue: {
          summary: 'enGB',
        },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the date is changed.',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: '(value: Date) => void',
        },
      },
    },
    value: {
      control: {
        type: 'object',
      },
      description: 'The value of the date picker.',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'Date',
        },
        defaultValue: {
          summary: 'new Date()',
        },
      },
    },
    variant: variant({
      variants: EDatePickerVariants,
      defaultValue: EDatePickerVariants.STANDARD,
      typeName: 'EDatePickerVariants',
    }),
    isFetching,
  },
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [value, setValue] = useState<IDatePickerProps['value']>(new Date())

  return <DatePicker {...args} value={value} onChange={(v) => setValue(v)} />
}

export const Standard = Template.bind({})
Standard.args = {
  locale: enGB,
  variant: EDatePickerVariants.STANDARD,
  disabled: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Standard.args,
  variant: EDatePickerVariants.OUTLINED,
}

export const Filled = Template.bind({})
Filled.args = {
  ...Standard.args,
  variant: EDatePickerVariants.FILLED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Standard.args,
  disabled: true,
}

export const LabelLeft = Template.bind({})
LabelLeft.args = {
  ...Standard.args,
  label: 'Label',
  labelPlacement: EDatePickerLabelPlacements.LEFT,
}

export const LabelTop = Template.bind({})
LabelTop.args = {
  ...Standard.args,
  label: 'Label',
  labelPlacement: EDatePickerLabelPlacements.TOP,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
