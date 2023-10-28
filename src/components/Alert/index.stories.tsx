import { noop } from 'lodash'

import styles from '../../styles/storybook.module.scss'

import { ECategories, isFetching, node } from '../../utils/argTypes'
import Button, { EButtonSizes, EButtonVariants } from '../Button'

import Alert, { EAlertSeverity } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Alert',
  // component: Alert,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    action: node({
      description: 'The action to display. It renders after the message, at the end of the alert.',
      required: false,
    }),
    children: node({
      description:
        "The content of the component. It's displayed after the icon and before the action.",
      required: false,
    }),
    icon: {
      control: {
        type: 'boolean',
      },
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
      description: 'If `true`, the Alert shows an icon.',
      required: false,
    },
    isFetching,
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
    severity: {
      control: {
        type: 'radio',
        options: Object.values(EAlertSeverity),
      },
      description: 'The severity of the component.',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'EAlertSeverity',
          detail: Object.values(EAlertSeverity).join(' | '),
        },
        defaultValue: {
          summary: EAlertSeverity.WARNING,
        },
      },
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => {
  const { children, ...rest } = args
  return (
    <Alert {...rest}>
      <div className={styles.alert}>
        <div className={styles.title}>Title</div>
        <div className={styles.description}>Description</div>
      </div>
    </Alert>
  )
}

export const Warning = Template.bind({})
Warning.args = {
  severity: EAlertSeverity.WARNING,
  icon: true,
}

export const Error = Template.bind({})
Error.args = {
  severity: EAlertSeverity.ERROR,
  icon: true,
}

export const Info = Template.bind({})
Info.args = {
  severity: EAlertSeverity.INFO,
  icon: true,
}

export const Question = Template.bind({})
Question.args = {
  severity: EAlertSeverity.QUESTION,
  icon: true,
}

export const Success = Template.bind({})
Success.args = {
  severity: EAlertSeverity.SUCCESS,
  icon: true,
}

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  ...Warning.args,
  icon: false,
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Warning.args,
  action: (
    <Button variant={EButtonVariants.OUTLINED} size={EButtonSizes.SMALL} customColor="#FA8C16">
      Action
    </Button>
  ),
}

export const WithClose = Template.bind({})
WithClose.args = {
  ...Warning.args,
  onClose: noop,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Warning.args,
  isFetching: true,
}
