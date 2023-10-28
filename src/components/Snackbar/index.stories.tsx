import { useState } from 'react'

import { noop } from 'lodash'

import { ECategories, node } from '../../utils/argTypes'
import Button, { EButtonSizes, EButtonVariants } from '../Button'

import Snackbar, { ESnackbarSeverity, ESnackbarVariants } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Snackbar',
  // component: Snackbar,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    action: node({
      description:
        'The action to display. It renders after the message, at the end of the snackbar.',
      required: false,
    }),
    description: {
      control: {
        type: 'text',
      },
      description: 'The message to display.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    onClose: {
      action: 'onClose',
      description: 'Callback fired when the component requests to be closed.',
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
      description: 'If true, the component is shown.',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    severity: {
      control: {
        type: 'radio',
        options: Object.values(ESnackbarSeverity),
      },
      description: 'The severity of the component.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'ESnackbarSeverity',
          detail: Object.values(ESnackbarSeverity).join(' | '),
        },
        defaultValue: {
          summary: ESnackbarSeverity.DEFAULT,
        },
      },
    },
    title: {
      control: {
        type: 'text',
      },
      description: 'The title to display.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.values(ESnackbarVariants),
      },
      description: 'The variant to use.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'ESnackbarVariants',
          detail: Object.values(ESnackbarVariants).join(' | '),
        },
        defaultValue: {
          summary: ESnackbarVariants.TEMPORARY,
        },
      },
    },
  },
} as ComponentMeta<typeof Snackbar>

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(true)

  return (
    <Snackbar {...args} open={open} onClose={args.onClose ? () => setOpen(false) : undefined} />
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  description: 'This is a description of the snackbar',
  severity: ESnackbarSeverity.DEFAULT,
  variant: ESnackbarVariants.TEMPORARY,
}

export const Warning = Template.bind({})
Warning.args = {
  ...Default.args,
  severity: ESnackbarSeverity.WARNING,
}

export const Error = Template.bind({})
Error.args = {
  ...Default.args,
  severity: ESnackbarSeverity.ERROR,
}

export const Info = Template.bind({})
Info.args = {
  ...Default.args,
  severity: ESnackbarSeverity.INFO,
}

export const Question = Template.bind({})
Question.args = {
  ...Default.args,
  severity: ESnackbarSeverity.QUESTION,
}

export const Success = Template.bind({})
Success.args = {
  ...Default.args,
  severity: ESnackbarSeverity.SUCCESS,
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Warning.args,
  action: (
    <Button variant={EButtonVariants.OUTLINED} size={EButtonSizes.XSMALL} customColor="#FA8C16">
      Action
    </Button>
  ),
}

export const WithClose = Template.bind({})
WithClose.args = {
  ...Warning.args,
  onClose: noop,
}

export const WithCloseAndAction = Template.bind({})
WithCloseAndAction.args = {
  ...WithAction.args,
  onClose: noop,
}

export const Permanent = Template.bind({})
Permanent.args = {
  ...Default.args,
  variant: ESnackbarVariants.PERMANENT,
}
