import { useState } from 'react'

import { noop } from 'lodash'

import { GoCheck, GoChevronDown, GoStar } from 'react-icons/go'

import { color, disabled, ECategories, isFetching, node, onClick } from '../../utils/argTypes'
import Avatar from '../Avatar'
import Checkbox from '../Checkbox'

import ListItem, { EListItemColors } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/List/ListItem',
  component: ListItem,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    children: node({
      description: 'The content of the ListItem.',
      required: false,
    }),
    color: color({
      colors: EListItemColors,
      defaultValue: EListItemColors.PRIMARY,
      typeName: 'EListItemColors',
    }),
    disabled,
    end: node({
      description: 'The end element of the ListItem.',
      required: false,
    }),
    isFetching,
    onClick,
    selected: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the ListItem will be selected.',
      table: {
        category: ECategories.APPEARANCE,
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    start: node({
      description: 'The start element of the ListItem.',
      required: false,
    }),
    subText: {
      control: {
        type: 'text',
      },
      description: 'The subtext of the ListItem.',
      table: {
        category: ECategories.APPEARANCE,
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof ListItem>

export const Text: ComponentStory<typeof ListItem> = (args) => {
  return (
    <ListItem {...args} onClick={undefined}>
      Item
    </ListItem>
  )
}

export const TextIconStart = Text.bind({})
TextIconStart.args = {
  start: <GoStar />,
}

export const TextIconEnd = Text.bind({})
TextIconEnd.args = {
  end: <GoCheck />,
}

export const TextSubtext = Text.bind({})
TextSubtext.args = {
  subText: 'Subtext',
}

export const TextAvatar = Text.bind({})
TextAvatar.args = {
  start: <Avatar src="https://ca.slack-edge.com/T0489UCJ29K-U048CT01FQS-db6637ac6cf3-512" />,
}

export const TextAction: ComponentStory<typeof ListItem> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <ListItem
      {...args}
      end={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
      color={EListItemColors.PRIMARY}
      onClick={undefined}
    >
      Item
    </ListItem>
  )
}

export const TextAll = TextAction.bind({})
TextAll.args = {
  start: <GoStar />,
  subText: 'Subtext',
}

export const ClickablePrimary: ComponentStory<typeof ListItem> = (args) => {
  return (
    <ListItem
      color={EListItemColors.PRIMARY}
      {...args}
      start={<GoStar />}
      end={<GoChevronDown />}
      subText="Subtext"
      onClick={noop}
    >
      Item
    </ListItem>
  )
}

export const ClickableSecondary = ClickablePrimary.bind({})
ClickableSecondary.args = {
  color: EListItemColors.SECONDARY,
}

export const ClickableDisabled = ClickablePrimary.bind({})
ClickableDisabled.args = {
  disabled: true,
}

export const Select: ComponentStory<typeof ListItem> = (args) => {
  const [selected, setSelected] = useState(false)

  return (
    <ListItem
      {...args}
      start={<GoStar />}
      end={
        <Checkbox
          disabled={args.disabled}
          checked={selected}
          onChange={() => setSelected(!selected)}
        />
      }
      subText="Subtext"
      onClick={() => setSelected(!selected)}
      selected={selected}
      color={EListItemColors.SECONDARY}
    >
      Item
    </ListItem>
  )
}

export const IsFetching = Text.bind({})
IsFetching.args = {
  isFetching: true,
}
