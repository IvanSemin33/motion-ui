import { useState } from 'react'

import { GoBellSlash, GoBell, GoX, GoCheck } from 'react-icons/go'

import { disabled, ECategories, icon, isFetching, onChange, size } from '../../utils/argTypes'

import Switch, { ESwitchSize } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    BackIcon: icon({
      description: 'The background icon to display when the component is unchecked.',
    }),
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the component is checked',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
      },
    },
    CheckedBackIcon: icon({
      description: 'The background icon to display when the component is checked.',
    }),
    CheckedIcon: icon({
      description: 'The icon to display when the component is checked.',
    }),
    disabled,
    Icon: icon({
      description: 'The icon to display when the component is unchecked.',
    }),
    isFetching,
    onChange,
    size: size({
      sizes: ESwitchSize,
      defaultValue: ESwitchSize.MEDIUM,
      typeName: 'ESwitchSize',
    }),
  },
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false)

  return <Switch {...args} onChange={setChecked} checked={checked} />
}

export const Default = Template.bind({})
Default.args = {
  size: ESwitchSize.MEDIUM,
}

export const Icon = Template.bind({})
Icon.args = {
  ...Default.args,
  CheckedIcon: GoBell,
  Icon: GoBellSlash,
}

export const BackIcon = Template.bind({})
BackIcon.args = {
  ...Default.args,
  CheckedBackIcon: GoCheck,
  BackIcon: GoX,
}

export const AllIcons = Template.bind({})
AllIcons.args = {
  ...BackIcon.args,
  ...Icon.args,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Default.args,
  isFetching: true,
}
