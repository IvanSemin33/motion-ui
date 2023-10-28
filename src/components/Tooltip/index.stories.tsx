import { className, ECategories, node } from '../../utils/argTypes'
import Popper from '../Popper'

import Tooltip, { ETooltipPosition } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  // component: Tooltip,
  subcomponents: { Popper },
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    arrow: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the tooltip has an arrow.',
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
      description: 'The element to which the tooltip is attached.',
      required: true,
    }),
    className,
    position: {
      control: {
        type: 'radio',
        options: Object.values(ETooltipPosition),
      },
      description: 'The position of the tooltip relative to the element.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'ETooltipPosition',
          detail: Object.values(ETooltipPosition).join(' | '),
        },
        defaultValue: {
          summary: ETooltipPosition.BOTTOM,
        },
      },
    },
    title: {
      control: {
        type: 'text',
      },
      type: {
        required: true,
        name: 'string',
      },
      description: 'The title of the tooltip.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
  },
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => {
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
      <Tooltip {...args}>
        <div
          style={{
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'darkcyan',
          }}
        >
          Hover on me!
        </div>
      </Tooltip>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Tooltip',
}

export const Top = Template.bind({})
Top.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.TOP,
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.TOP_LEFT,
}

export const TopRight = Template.bind({})
TopRight.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.TOP_RIGHT,
}

export const Bottom = Template.bind({})
Bottom.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.BOTTOM,
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.BOTTOM_LEFT,
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.BOTTOM_RIGHT,
}

export const Left = Template.bind({})
Left.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.LEFT,
}

export const Right = Template.bind({})
Right.args = {
  ...Default.args,
  arrow: true,
  position: ETooltipPosition.RIGHT,
}

export const LongTitle = Template.bind({})
LongTitle.args = {
  ...Top.args,
  title: 'This is a very long title that will be truncated.',
}
