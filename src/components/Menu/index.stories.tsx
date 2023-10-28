import { useRef, useState } from 'react'

import { noop } from 'lodash'

import { ECategories, node } from '../../utils/argTypes'
import Button from '../Button'
import List from '../List'
import ListItem from '../ListItem'

import Menu, { EMenuPosition } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Menu',
  // component: Menu,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    anchorEl: {
      description: 'The DOM element used to set the position of the menu.',
      type: {
        name: 'other',
        required: true,
        value: 'HTMLElement | null',
      },
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'HTMLElement | null',
        },
      },
    },
    arrow: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the menu will have an arrow.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    children: node({
      description: 'The content of the menu.',
      required: false,
    }),
    open: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the menu is visible.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
      },
    },
    position: {
      control: {
        type: 'radio',
        options: Object.values(EMenuPosition),
      },
      description: 'The placement of the menu.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'EMenuPosition',
        },
        defaultValue: {
          summary: EMenuPosition.BOTTOM,
        },
      },
    },
  },
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open menu
      </Button>
      <Menu {...args} open={open} anchorEl={buttonRef.current}>
        <List>
          <ListItem onClick={noop}>Item 1</ListItem>
          <ListItem onClick={noop}>Item 2</ListItem>
          <ListItem onClick={noop}>Item 3</ListItem>
        </List>
      </Menu>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Top = Template.bind({})
Top.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.TOP,
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.TOP_LEFT,
}

export const TopRight = Template.bind({})
TopRight.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.TOP_RIGHT,
}

export const Bottom = Template.bind({})
Bottom.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.BOTTOM,
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.BOTTOM_LEFT,
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.BOTTOM_RIGHT,
}

export const Left = Template.bind({})
Left.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.LEFT,
}

export const Right = Template.bind({})
Right.args = {
  ...Default.args,
  arrow: true,
  position: EMenuPosition.RIGHT,
}
