import { GoHeart, GoHome } from "react-icons/go";

import {
  children,
  className,
  ECategories,
  icon,
  isFetching,
  variant,
} from "../../utils/argTypes";

import Tab, { ETabVariants } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Navigation/Tabs/Tab",
  // component: Tab,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    children,
    className,
    IconEnd: icon({
      description: "The end icon of the tab.",
    }),
    IconStart: icon({
      description: "The start icon of the tab.",
    }),
    isFetching,
    label: {
      control: {
        type: "text",
      },
      description: "The label of the tab.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: {
        type: "text",
      },
      type: {
        name: "string",
        required: true,
      },
      description: "The value of the tab.",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "TTabsValue",
        },
      },
    },
    variant: variant({
      variants: ETabVariants,
      defaultValue: ETabVariants.DEFAULT,
      typeName: "ETabVariants",
    }),
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  return <Tab {...args} value="0" />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Tab",
};

export const IconStart = Template.bind({});
IconStart.args = {
  ...Default.args,
  IconStart: GoHeart,
};

export const IconEnd = Template.bind({});
IconEnd.args = {
  ...Default.args,
  IconEnd: GoHome,
};

export const IconStartAndEnd = Template.bind({});
IconStartAndEnd.args = {
  ...Default.args,
  IconStart: GoHeart,
  IconEnd: GoHome,
};

export const WithOutLabel = Template.bind({});
WithOutLabel.args = {
  ...Default.args,
  label: "",
  IconStart: GoHeart,
};

export const IsFetching = Template.bind({});
IsFetching.args = {
  ...Default.args,
  isFetching: true,
};
