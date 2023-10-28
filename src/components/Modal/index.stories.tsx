import { useState } from 'react'

import { className, ECategories, node } from '../../utils/argTypes'
import Button from '../Button'

import Modal from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Utils/Modal',
  component: Modal,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    children: node({
      description: 'The content of the modal.',
      required: true,
    }),
    className,
    hideBackdrop: {
      control: {
        type: 'boolean',
      },
      description: 'If true the backdrop is transparent.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
      },
    },
    onClose: {
      control: {
        type: 'function',
      },
      describtion: 'Callback fired when the component requests to be closed.',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: 'function',
        },
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
      type: {
        name: 'boolean',
        required: true,
      },
      description: 'If true, the modal is open.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)

  const renderContent = () => (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid black',
      }}
    >
      <h1>The content of the Modal.</h1>
    </div>
  )

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {renderContent()}
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithoutBackdrop = Template.bind({})
WithoutBackdrop.args = {
  hideBackdrop: true,
}
