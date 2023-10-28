import { useState } from 'react'

import { className, ECategories, isFetching } from '../../utils/argTypes'
import IconButton from '../IconButton'
import Input from '../Input'

import Pagination from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Pagination',
  // component: Pagination,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  subcomponents: {
    IconButton,
    Input,
  },
  argTypes: {
    className,
    isFetching,
    label: {
      control: {
        type: 'text',
      },
      description: 'Label for pagination',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'from',
        },
      },
    },
    nextDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disables next button',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    onClickNext: {
      action: 'onClickNext',
      description: 'Callback for next button click',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: 'function',
        },
      },
    },
    onClickPrev: {
      action: 'onClickPrev',
      description: 'Callback for prev button click',
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: 'function',
        },
      },
    },
    page: {
      control: {
        type: 'number',
      },
      type: {
        name: 'number',
        required: true,
      },
      description: 'Current page',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'number',
        },
      },
    },
    pageCount: {
      control: {
        type: 'number',
      },
      description: 'Total page count',
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'number',
        },
      },
    },
    prevDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disables prev button',
      table: {
        category: ECategories.STATE,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    setPage: {
      action: 'setPage',
      description: 'Callback for page change',
      type: {
        name: 'function',
        required: true,
      },
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: 'function',
        },
      },
    },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState(0)
  const pageCount = 10

  return (
    <Pagination
      {...args}
      nextDisabled={page === pageCount - 1}
      onClickNext={() => setPage(page + 1)}
      onClickPrev={() => setPage(page - 1)}
      page={page}
      pageCount={pageCount}
      prevDisabled={page === 0}
      setPage={setPage}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const IsFetching = Template.bind({})
IsFetching.args = {
  isFetching: true,
}
