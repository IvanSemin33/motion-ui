import styles from '../../styles/storybook.module.scss'

import { ECategories, isFetching, node } from '../../utils/argTypes'
import Link, { ELinkColors } from '../Link'

import Breadcrumbs from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    children: node({
      description: 'The content of the component.',
      required: false,
    }),
    maxItems: {
      description:
        'Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first items and last items will be shown, with an ellipsis in between.',
      required: false,
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 8,
        },
      },
      control: {
        type: 'number',
      },
    },
    isFetching,
  },
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => {
  return (
    <Breadcrumbs {...args} className={styles.breadcrumbs}>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Home
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Catalog
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Women
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Clothes
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Jackets
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Winter
      </Link>
      <span className={styles.currentCrumb}>Sale</span>
    </Breadcrumbs>
  )
}

export const Default = Template.bind({})
Default.args = {
  maxItems: 7,
  isFetching: false,
}

export const MaxItems = Template.bind({})
MaxItems.args = {
  ...Default.args,
  maxItems: 5,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Default.args,
  isFetching: true,
}
