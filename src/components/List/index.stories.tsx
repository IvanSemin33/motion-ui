import { node } from '../../utils/argTypes'
import ListItem from '../ListItem'
import * as ListItemStories from '../ListItem/index.stories'

import List from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/List',
  component: List,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  subcomponents: { ListItem },
  argTypes: {
    children: node({
      description: 'The content of the component.',
      required: false,
    }),
  },
} as ComponentMeta<typeof List>

const createChildren = (ListItemStory: typeof ListItemStories.Text) => {
  return Array.from({ length: 5 }, (_, i) => <ListItemStory {...ListItemStory.args} key={i} />)
}

const Template: ComponentStory<typeof List> = (args) => {
  return <List {...args} />
}

export const Text = Template.bind({})
Text.args = {
  children: createChildren(ListItemStories.Text),
}

export const TextIconStart = Template.bind({})
TextIconStart.args = {
  children: createChildren(ListItemStories.TextIconStart),
}

export const TextIconEnd = Template.bind({})
TextIconEnd.args = {
  children: createChildren(ListItemStories.TextIconEnd),
}

export const TextSubtext = Template.bind({})
TextSubtext.args = {
  children: createChildren(ListItemStories.TextSubtext),
}

export const TextAvatar = Template.bind({})
TextAvatar.args = {
  children: createChildren(ListItemStories.TextAvatar),
}

export const TextAction = Template.bind({})
TextAction.args = {
  children: createChildren(ListItemStories.TextAction),
}

export const TextAll = TextAction.bind({})
TextAll.args = {
  children: createChildren(ListItemStories.TextAll),
}

export const ClickablePrimary = Template.bind({})
ClickablePrimary.args = {
  children: createChildren(ListItemStories.ClickablePrimary),
}

export const ClickableSecondary = Template.bind({})
ClickableSecondary.args = {
  children: createChildren(ListItemStories.ClickableSecondary),
}

export const ClickableDisabled = ClickablePrimary.bind({})
ClickableDisabled.args = {
  children: createChildren(ListItemStories.ClickableDisabled),
}

export const Select = Template.bind({})
Select.args = {
  children: createChildren(ListItemStories.Select),
}

export const IsFetching = Text.bind({})
IsFetching.args = {
  children: createChildren(ListItemStories.IsFetching),
}
