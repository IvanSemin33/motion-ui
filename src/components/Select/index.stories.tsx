import { useMemo, useState } from 'react'

import { GoStar } from 'react-icons/go'

import {
  className,
  color,
  disabled,
  ECategories,
  isFetching,
  label,
  variant,
} from '../../utils/argTypes'
import Avatar from '../Avatar'
import List from '../List'
import ListItem, { EListItemColors } from '../ListItem'
import Popper from '../Popper'

import Select, {
  ESelectColors,
  ESelectMultipleVariant,
  ESelectVariants,
  ISelectProps,
  TOption,
} from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Select',
  component: Select,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  subcomponents: { Popper, List, ListItem },
  argTypes: {
    className,
    color: color({
      colors: ESelectColors,
      defaultValue: ESelectColors.PRIMARY,
      typeName: 'ESelectColors',
    }),
    disabled,
    emptyListText: {
      control: {
        type: 'text',
      },
      description: 'Text to show when list is empty.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'No options',
        },
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
      description: 'The helper text to display below the select.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    isFetching,
    isLoading: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the select is in loading state.',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
      },
    },
    label,
    multiple: {
      control: {
        type: 'boolean',
      },
      description: 'If true, multiple options can be selected.',
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: 'boolean',
        },
      },
    },
    multiplePlaceholder: {
      control: {
        type: 'text',
      },
      description: 'Placeholder to show when multiple options are selected.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Selected:',
        },
      },
    },
    multipleVariant: {
      control: {
        type: 'radio',
        options: Object.values(ESelectMultipleVariant),
      },
      description: 'The multiple variant to use.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'ESelectMultipleVariant',
        },
        defaultValue: {
          summary: ESelectMultipleVariant.DEFAULT,
        },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the component is changed.',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: '(value?: TOption | TOption[]) => void',
        },
      },
    },
    onClear: {
      action: 'onClear',
      description: 'Callback fired when the clear button is clicked.',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: '() => void',
        },
      },
    },
    onSearchChange: {
      action: 'onSearchChange',
      description: 'Callback fired when the search value is changed.',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: '(value: string) => void',
        },
      },
    },
    options: {
      control: {
        type: 'object',
      },
      description: 'The options to display in the select.',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'TOption[]',
        },
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'The short hint displayed in the select.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    popperClassName: {
      control: {
        type: 'text',
      },
      description: 'The className to apply to the popper element.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    renderValue: {
      control: {
        type: 'function',
      },
      description: 'The function to render the value.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: '(value: TOption | TOption[]) => string',
        },
      },
    },
    searchValue: {
      control: {
        type: 'text',
      },
      description: 'The value to display in the search input.',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      control: {
        type: 'object',
      },
      description: 'The value of the select.',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'TOption | TOption[]',
        },
      },
    },
    variant: variant({
      variants: ESelectVariants,
      defaultValue: ESelectVariants.FILLED,
      typeName: 'ESelectVariants',
    }),
  },
} as ComponentMeta<typeof Select>

const options = Array.from({ length: 33 }, (_, i) => ({
  label: `TOption ${i + 1}`,
  value: i + 1,
}))

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<ISelectProps['value']>()

  return (
    <Select
      {...args}
      value={value}
      onChange={setValue}
      onClear={() => setValue(undefined)}
      placeholder="Placeholder"
      onSearchChange={undefined}
    />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  color: ESelectColors.PRIMARY,
  variant: ESelectVariants.STANDARD,
  options,
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Standard.args,
  variant: ESelectVariants.OUTLINED,
}

export const Filled = Template.bind({})
Filled.args = {
  ...Standard.args,
  variant: ESelectVariants.FILLED,
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
  color: ESelectColors.SUCCESS,
}

export const Error = Template.bind({})
Error.args = {
  ...Standard.args,
  color: ESelectColors.ERROR,
}

export const ErrorText = Template.bind({})
ErrorText.args = {
  ...Error.args,
  helperText: 'Error text',
}

export const ListItemOption = Template.bind({})
ListItemOption.args = {
  ...Standard.args,
  options: Array.from({ length: 33 }, (_, i) => ({
    label: (
      <ListItem
        color={EListItemColors.PRIMARY}
        start={<Avatar src="https://ca.slack-edge.com/T0489UCJ29K-U048CT01FQS-db6637ac6cf3-512 " />}
        end={<GoStar />}
        subText="Subtext"
        key={i}
      >
        {`Ivan ${i + 1}`}
      </ListItem>
    ),
    value: i + 1,
  })),
  renderValue: (option) => `Ivan ${(option as TOption).value}`,
}

const TemplateSearch: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<ISelectProps['value']>()
  const [search, setSearch] = useState('')

  const filteredOptions = useMemo(() => {
    if (!search) {
      return options
    }
    return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <Select
      {...args}
      value={value}
      onChange={setValue}
      onClear={() => setValue(undefined)}
      placeholder="Placeholder"
      onSearchChange={setSearch}
      searchValue={search}
      options={filteredOptions}
    />
  )
}

export const Search = TemplateSearch.bind({})
Search.args = {
  color: ESelectColors.PRIMARY,
  variant: ESelectVariants.STANDARD,
}

const TemplateMultiple: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<ISelectProps['value']>([])

  return (
    <Select
      {...args}
      value={value}
      onChange={setValue}
      onClear={() => setValue([])}
      placeholder="Placeholder"
      options={options}
      onSearchChange={undefined}
      multiple
    />
  )
}

export const MultipleDefault = TemplateMultiple.bind({})
MultipleDefault.args = {
  color: ESelectColors.PRIMARY,
  variant: ESelectVariants.STANDARD,
  multipleVariant: ESelectMultipleVariant.DEFAULT,
}

export const MultipleChip = TemplateMultiple.bind({})
MultipleChip.args = {
  ...MultipleDefault.args,
  multipleVariant: ESelectMultipleVariant.CHIP,
}

export const MultipleCustom = TemplateMultiple.bind({})
MultipleCustom.args = {
  ...MultipleDefault.args,
  renderValue: (value) => {
    const options = value as TOption[]
    return options.map(({ label }) => label).join(', ')
  },
}

const TemplateMultipleSearch: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<ISelectProps['value']>([])
  const [search, setSearch] = useState('')

  const filteredOptions = useMemo(() => {
    if (!search) {
      return options
    }
    return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <Select
      {...args}
      value={value}
      onChange={setValue}
      onClear={() => setValue([])}
      placeholder="Placeholder"
      options={filteredOptions}
      multiple
      searchValue={search}
      onSearchChange={setSearch}
    />
  )
}

export const MultipleSearchDefault = TemplateMultipleSearch.bind({})
MultipleSearchDefault.args = {
  color: ESelectColors.PRIMARY,
  variant: ESelectVariants.STANDARD,
  multipleVariant: ESelectMultipleVariant.DEFAULT,
}

export const MultipleSearchChip = TemplateMultipleSearch.bind({})
MultipleSearchChip.args = {
  ...MultipleSearchDefault.args,
  multipleVariant: ESelectMultipleVariant.CHIP,
}

export const isLoading = Template.bind({})
isLoading.args = {
  ...Standard.args,
  isLoading: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
}
