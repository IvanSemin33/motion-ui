import { useState } from "react";

import { GoPlus } from "react-icons/go";

import {
  children,
  color,
  disabled,
  ECategories,
  icon,
  isFetching,
  onClick,
  size,
  variant,
} from "../../utils/argTypes";

import ToggleButton, {
  EToggleButtonColors,
  EToggleButtonSizes,
  EToggleButtonVariants,
} from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Inputs/ToggleButtonGroup/ToggleButton",
  // component: ToggleButton,
  zeplinLink: "https://zpl.io/p1Q1PEy",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    children,
    color: color({
      colors: EToggleButtonColors,
      defaultValue: EToggleButtonColors.PRIMARY,
      typeName: "EToggleButtonColors",
    }),
    customColor: {
      control: {
        type: "color",
      },
      description: "The custom color HEX to use for the button",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "string",
        },
      },
    },
    disabled,
    href: {
      control: {
        type: "text",
      },
      description: "The URL to link to when the button is clicked",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "string",
        },
      },
    },
    Icon: icon({
      description: "The icon to display in the button",
    }),
    IconEnd: {
      ...icon({
        description: "The icon to display at the end of the button",
      }),
    },
    IconStart: {
      ...icon({
        description: "The icon to display at the start of the button",
      }),
    },
    size: size({
      sizes: EToggleButtonSizes,
      defaultValue: EToggleButtonSizes.MEDIUM,
      typeName: "EToggleButtonSizes",
    }),
    loading: {
      control: {
        type: "boolean",
      },
      description: "If `true`, the button will be in loading state",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "boolean",
        },
      },
    },
    selected: {
      control: {
        type: "boolean",
      },
      description: "If `true`, the button will be in selected state",
      table: {
        category: ECategories.STATE,
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    value: {
      control: {
        type: "text",
      },
      description: "The value of the button",
      type: {
        name: "string",
        required: true,
      },
      table: {
        category: ECategories.DATA,
        type: {
          summary: "string",
        },
      },
    },
    variant: variant({
      variants: EToggleButtonVariants,
      defaultValue: EToggleButtonVariants.CONTAINED,
      typeName: "EToggleButtonVariants",
    }),
    isFetching,
    onClick,
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
  const { children = "ToggleButton", ...rest } = args;
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      {...rest}
      value="toggleButton"
      selected={selected}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </ToggleButton>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: EToggleButtonVariants.DEFAULT,
};

export const Contained = Template.bind({});
Contained.args = {
  variant: EToggleButtonVariants.CONTAINED,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: EToggleButtonVariants.OUTLINED,
};

export const Link = Template.bind({});
Link.args = {
  variant: EToggleButtonVariants.LINK,
  color: EToggleButtonColors.PRIMARY,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Contained.args,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Contained.args,
  color: EToggleButtonColors.ERROR,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Contained.args,
  Icon: GoPlus,
};

export const IconStart = Template.bind({});
IconStart.args = {
  ...Contained.args,
  IconStart: GoPlus,
};

export const IconEnd = Template.bind({});
IconEnd.args = {
  ...Contained.args,
  IconEnd: GoPlus,
};

export const ColorHex = Template.bind({});
ColorHex.args = {
  IconEnd: GoPlus,
  customColor: "#EB2F96",
};

export const Loading = Template.bind({});
Loading.args = {
  ...Contained.args,
  loading: true,
};

export const IsFetching = Template.bind({});
IsFetching.args = {
  ...Contained.args,
  isFetching: true,
};
