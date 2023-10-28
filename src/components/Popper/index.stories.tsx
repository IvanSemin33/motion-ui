import { useRef, useState } from 'react'

import { ECategories, node } from '../../utils/argTypes'
import Button from '../Button'

import Popper, { EPopperPosition } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Utils/Popper',
  // component: Popper,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    anchorEl: {
      description: 'The DOM element used to set the position of the popper.',
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
      description: 'If true, the popper will have an arrow.',
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
      description: 'The content of the popper.',
      required: false,
    }),
    fixed: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the popper will be fixed.',
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
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the popper will have the same width as the anchor element.',
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
    open: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the popper is visible.',
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
        options: Object.values(EPopperPosition),
      },
      description: 'The placement of the popper.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'EPopperPosition',
        },
        defaultValue: {
          summary: EPopperPosition.BOTTOM,
        },
      },
    },
  },
} as ComponentMeta<typeof Popper>

const Template: ComponentStory<typeof Popper> = (args) => {
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
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Top = Template.bind({})
Top.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.TOP,
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.TOP_LEFT,
}

export const TopRight = Template.bind({})
TopRight.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.TOP_RIGHT,
}

export const Bottom = Template.bind({})
Bottom.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.BOTTOM,
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.BOTTOM_LEFT,
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.BOTTOM_RIGHT,
}

export const Left = Template.bind({})
Left.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.LEFT,
}

export const Right = Template.bind({})
Right.args = {
  ...Default.args,
  arrow: true,
  position: EPopperPosition.RIGHT,
}
