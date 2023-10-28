import { children, color, ECategories, isFetching } from '../../utils/argTypes'

import Link, { ELinkColors } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Link',
  component: Link,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    children,
    isFetching,
    color: color({
      colors: ELinkColors,
      defaultValue: ELinkColors.PRIMARY,
      typeName: 'ELinkColors',
    }),
    underline: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Underline the link',
      table: {
        category: ECategories.APPEARANCE,
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => {
  return (
    <Link href="" {...args}>
      Link
    </Link>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  color: ELinkColors.PRIMARY,
  underline: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  color: ELinkColors.SECONDARY,
}

export const Light = Template.bind({})
Light.args = {
  ...Primary.args,
  color: ELinkColors.LIGHT,
}

export const Dark = Template.bind({})
Dark.args = {
  ...Primary.args,
  color: ELinkColors.DARK,
}

export const Underline = Template.bind({})
Underline.args = {
  ...Primary.args,
  underline: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Primary.args,
  isFetching: true,
}
