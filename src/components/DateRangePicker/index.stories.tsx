import { useState } from 'react'

import { enGB } from 'date-fns/locale'

import { className, disabled, ECategories, isFetching, label, variant } from '../../utils/argTypes'

import DateRangePicker, {
  EDateRangePickerLabelPlacements,
  EDateRangePickerVariants,
  IDateRangePickerProps,
} from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Date Range Picker',
  // component: DateRangePicker,
  argTypes: {
    className,
    disabled,
    label,
    labelPlacement: {
      control: {
        type: 'radio',
        options: Object.values(EDateRangePickerLabelPlacements),
      },
      description: 'The position of the label.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'EDateRangePickerLabelPlacements',
          detail: Object.values(EDateRangePickerLabelPlacements).join(' | '),
        },
        defaultValue: {
          summary: EDateRangePickerLabelPlacements.TOP,
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
          summary: '(value: Range[]) => void',
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
          summary: 'Range[]',
        },
        defaultValue: {
          summary: '[]',
        },
      },
    },
    variant: variant({
      variants: EDateRangePickerVariants,
      defaultValue: EDateRangePickerVariants.STANDARD,
      typeName: 'EDateRangePickerVariants',
    }),
    isFetching,
    staticRanges: {
      control: {
        type: 'boolean',
      },
      description: 'Show static ranges.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    staticRangesLabels: {
      control: {
        type: 'object',
      },
      description: 'The labels of the static ranges.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: `{
            today: string
            yesterday: string
            thisWeek: string
            lastWeek: string
            thisMonth: string
            lastMonth: string
          }`,
        },
      },
    },
  },
} as ComponentMeta<typeof DateRangePicker>

const Template: ComponentStory<typeof DateRangePicker> = (args) => {
  const [value, setValue] = useState<IDateRangePickerProps['value']>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: 'selection',
    },
  ])

  return <DateRangePicker {...args} value={value} onChange={(v) => setValue(v)} />
}

export const Standard = Template.bind({})
Standard.args = {
  locale: enGB,
  variant: EDateRangePickerVariants.STANDARD,
  disabled: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Standard.args,
  variant: EDateRangePickerVariants.OUTLINED,
}

export const Filled = Template.bind({})
Filled.args = {
  ...Standard.args,
  variant: EDateRangePickerVariants.FILLED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Standard.args,
  disabled: true,
}

export const WithStaticRanges = Template.bind({})
WithStaticRanges.args = {
  ...Standard.args,
  staticRanges: true,
  staticRangesLabels: {
    today: 'Today',
    yesterday: 'Yesterday',
    thisWeek: 'This week',
    lastWeek: 'Last week',
    thisMonth: 'This month',
    lastMonth: 'Last month',
  },
}

export const LabelLeft = Template.bind({})
LabelLeft.args = {
  ...Standard.args,
  label: 'Label',
  labelPlacement: EDateRangePickerLabelPlacements.LEFT,
}

export const LabelTop = Template.bind({})
LabelTop.args = {
  ...Standard.args,
  label: 'Label',
  labelPlacement: EDateRangePickerLabelPlacements.TOP,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
