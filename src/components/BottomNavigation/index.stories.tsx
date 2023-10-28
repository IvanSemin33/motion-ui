import { useState } from "react";

import {
  GoHome,
  GoKebabHorizontal,
  GoBell,
  GoHeart,
  GoGear,
} from "react-icons/go";

import { className, ECategories } from "../../utils/argTypes";

import BottomNavigation from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Navigation/BottomNavigation",
  component: BottomNavigation,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    actions: {
      control: {
        type: "array",
      },
      type: {
        name: "array",
        value: {
          name: "object",
          value: {
            label: {
              name: "string",
              required: true,
            },
            value: {
              name: "string",
              required: true,
            },
            Icon: {
              name: "other",
              value: "Icon",
              required: true,
            },
          },
        },
        required: true,
      },
      description: "Navigation actions",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "TAction[]",
          detail: "{ label: string, value: string, Icon: Icon }[]",
        },
      },
    },
    className,
    onChange: {
      action: "onChange",
      type: {
        name: "function",
        required: true,
        value: "(value: string) => void",
      },
      description: "Change handler.",
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: "(value: string) => void",
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
      description: "Current value.",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "string",
        },
      },
    },
  },
} as ComponentMeta<typeof BottomNavigation>;

const actions = [
  {
    label: "Home",
    value: "home",
    Icon: GoHome,
  },
  {
    label: "Favorites",
    value: "favorites",
    Icon: GoHeart,
  },
  {
    label: "Notifications",
    value: "notifications",
    Icon: GoBell,
  },
  {
    label: "Settings",
    value: "settings",
    Icon: GoGear,
  },
  {
    label: "More",
    value: "more",
    Icon: GoKebabHorizontal,
  },
];
const Template: ComponentStory<typeof BottomNavigation> = (args) => {
  const [value, setValue] = useState("home");

  return (
    <BottomNavigation
      {...args}
      actions={actions}
      value={value}
      onChange={setValue}
    />
  );
};

export const Standard = Template.bind({});
Standard.args = {};
