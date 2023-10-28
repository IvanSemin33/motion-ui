import { ECategories, height, isFetching, width } from '../../utils/argTypes'

import Avatar from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the avatar will have a green border.',
      table: {
        category: ECategories.APPEARANCE,
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    alt: {
      control: {
        type: 'text',
      },
      description:
        'Used in combination with src or srcSet to provide an alt attribute for the rendered img element.',
      table: {
        category: ECategories.APPEARANCE,
        defaultValue: {
          summary: 'avatar',
        },
        type: {
          summary: 'string',
        },
      },
    },
    height: height({
      defaultValue: 44,
      minValue: 20,
      maxValue: 80,
    }),
    isFetching,
    src: {
      control: {
        type: 'text',
      },
      description: 'The src attribute for the img element.',
      table: {
        category: ECategories.APPEARANCE,
        defaultValue: {
          summary: 'avatar-placeholder.svg',
        },
        type: {
          summary: 'string',
        },
      },
    },
    width: width({
      defaultValue: 44,
      minValue: 20,
      maxValue: 80,
    }),
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  active: false,
  alt: 'avatar',
  height: 44,
  isFetching: false,
  src: 'https://ca.slack-edge.com/T0489UCJ29K-U048CT01FQS-db6637ac6cf3-512',
  width: 44,
}

export const Active = Template.bind({})
Active.args = {
  ...Default.args,
  active: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Default.args,
  isFetching: true,
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  ...Default.args,
  src: '',
}
