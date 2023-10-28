import { color, ECategories, isFetching, node, size } from '../../utils/argTypes'

import LinearProgress, {
  ELinearProgressColor,
  ELinearProgressLabelPosition,
  ELinearProgressSize,
} from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/LinearProgress',
  // component: LinearProgress,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: color({
      colors: ELinearProgressColor,
      defaultValue: ELinearProgressColor.PRIMARY,
      typeName: 'ELinearProgressColor',
    }),
    isFetching,
    labelPosition: {
      control: {
        type: 'radio',
        options: Object.values(ELinearProgressLabelPosition),
      },
      description: 'Position of the label',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'ELinearProgressLabelPosition',
          detail: Object.values(ELinearProgressLabelPosition).join(' | '),
        },
        defaultValue: {
          summary: ELinearProgressLabelPosition.TOP,
        },
      },
    },
    renderLabel: {
      control: {
        type: 'function',
      },
      description: 'Custom label',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: '() => string',
        },
      },
    },
    size: size({
      sizes: ELinearProgressSize,
      defaultValue: ELinearProgressSize.MEDIUM,
      typeName: 'ELinearProgressSize',
    }),
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
      type: {
        required: true,
        name: 'number',
      },
      description: 'Value of the progress',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'number',
          detail: '0-100',
        },
      },
    },
  },
} as ComponentMeta<typeof LinearProgress>

const Template: ComponentStory<typeof LinearProgress> = (args) => {
  return <LinearProgress {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  color: ELinearProgressColor.PRIMARY,
  labelPosition: ELinearProgressLabelPosition.TOP,
  size: ELinearProgressSize.MEDIUM,
  value: 33,
}

export const Error = Template.bind({})
Error.args = {
  ...Primary.args,
  color: ELinearProgressColor.ERROR,
}

export const Success = Template.bind({})
Success.args = {
  ...Primary.args,
  color: ELinearProgressColor.SUCCESS,
}

export const Small = Template.bind({})
Small.args = {
  ...Primary.args,
  size: ELinearProgressSize.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  ...Primary.args,
}

export const LabelTop = Template.bind({})
LabelTop.args = {
  ...Primary.args,
}

export const LabelRight = Template.bind({})
LabelRight.args = {
  ...Primary.args,
  labelPosition: ELinearProgressLabelPosition.RIGHT,
}

export const CustomLabel = Template.bind({})
CustomLabel.args = {
  ...Primary.args,
  renderLabel: () => 'Custom label',
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Primary.args,
  isFetching: true,
}
