import { useState } from "react";

import { GoStar, GoHome } from "react-icons/go";

import {
  children,
  className,
  ECategories,
  isFetching,
  variant,
} from "../../utils/argTypes";
import Tab, { ITabProps } from "../Tab";

import Tabs, { ETabsVariants, TTabsValue } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Navigation/Tabs",
  // component: Tabs,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    children,
    className,
    onChange: {
      control: false,
      action: "onChange",
      description: "Callback fired when the component is changed.",
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: "(value: TValue) => void",
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
      description: "The value of the selected tab.",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "TTabsValue",
        },
      },
    },
    variant: variant({
      variants: ETabsVariants,
      defaultValue: ETabsVariants.DEFAULT,
      typeName: "ETabsVariants",
    }),
    isFetching,
  },
} as ComponentMeta<typeof Tabs>;

const createChildren = (props: Omit<ITabProps, "value">) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Tab key={i} {...props} value={i} label={`Tab ${i}`} />
  ));
};

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [value, setValue] = useState<TTabsValue>(0);

  return (
    <Tabs {...args} onChange={(v) => setValue(v)} value={value}>
      {args.children}
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: ETabsVariants.DEFAULT,
  children: createChildren({}),
};

export const IconStart = Template.bind({});
IconStart.args = {
  ...Default.args,
  children: createChildren({ IconStart: GoStar }),
};

export const IconEnd = Template.bind({});
IconEnd.args = {
  ...Default.args,
  children: createChildren({ IconEnd: GoHome }),
};

export const IconStartAndEnd = Template.bind({});
IconStartAndEnd.args = {
  ...Default.args,
  children: createChildren({ IconStart: GoStar, IconEnd: GoHome }),
};

export const WithOutLabel = Template.bind({});
WithOutLabel.args = {
  ...Default.args,
  children: createChildren({ IconStart: GoStar, label: "" }),
};

export const IsFetching = Template.bind({});
IsFetching.args = {
  ...Default.args,
  isFetching: true,
};
