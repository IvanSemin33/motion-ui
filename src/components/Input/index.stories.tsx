import { useState } from "react";

import { GoSearch } from "react-icons/go";

import {
  className,
  color,
  disabled,
  ECategories,
  icon,
  isFetching,
  label,
  onChange,
  onClick,
  variant,
} from "../../utils/argTypes";

import Input, { EInputColors, EInputVariants, IInputProps } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Inputs/Input",
  component: Input,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    className,
    color: color({
      colors: EInputColors,
      defaultValue: EInputColors.PRIMARY,
      typeName: "EInputColors",
    }),
    disabled,
    helperText: {
      control: {
        type: "text",
      },
      description: "The helper text to display below the input",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "string",
        },
      },
    },
    IconEnd: icon({
      description: "The icon to display at the end of the input",
    }),
    IconStart: icon({
      description: "The icon to display at the start of the input",
    }),
    isFetching,
    label,
    variant: variant({
      variants: EInputVariants,
      defaultValue: EInputVariants.FILLED,
      typeName: "EInputVariants",
    }),
    // native props
    onClick,
    onChange,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<IInputProps["value"]>("");

  return (
    <Input
      {...args}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder="Placeholder"
    />
  );
};

export const Standard = Template.bind({});
Standard.args = {
  variant: EInputVariants.STANDARD,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: EInputVariants.OUTLINED,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: EInputVariants.FILLED,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Standard.args,
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Standard.args,
  label: "Label",
};

export const HelperText = Template.bind({});
HelperText.args = {
  ...Standard.args,
  helperText: "Helper text",
};

export const Success = Template.bind({});
Success.args = {
  ...Standard.args,
  color: EInputColors.SUCCESS,
};

export const Error = Template.bind({});
Error.args = {
  ...Standard.args,
  color: EInputColors.ERROR,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  ...Error.args,
  helperText: "Error text",
};

export const IconStart = Template.bind({});
IconStart.args = {
  ...Standard.args,
  IconStart: GoSearch,
};

export const IconEnd = Template.bind({});
IconEnd.args = {
  ...Standard.args,
  IconEnd: GoSearch,
};

export const IsFetching = Template.bind({});
IsFetching.args = {
  ...Standard.args,
  isFetching: true,
};
