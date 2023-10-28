import { useState } from "react";

import { disabled, ECategories, isFetching } from "../../utils/argTypes";

import Slider, { TSliderValues } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Inputs/Slider",
  // component: Slider,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    disabled,
    isFetching,
    max: {
      control: {
        type: "number",
      },
      table: {
        category: ECategories.DATA,
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 100,
        },
      },
    },
    min: {
      control: {
        type: "number",
      },
      table: {
        category: ECategories.DATA,
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
    onChange: {
      action: "onChange",
      table: {
        category: ECategories.EVENTS,
        type: {
          summary: "(value: TSliderValues) => void",
        },
      },
    },
    stepSize: {
      control: {
        type: "range",
        min: 1,
        max: 100,
        step: 1,
      },
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 1,
        },
      },
    },
    values: {
      control: {
        type: "array",
      },
      type: {
        required: true,
        value: "number | number[]",
        name: "other",
      },
      table: {
        category: ECategories.DATA,
        type: {
          summary: "TSliderValues",
          detail: "number | number[]",
        },
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [values, setValues] = useState<TSliderValues>([33]);

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        {...args}
        min={0}
        max={100}
        values={values}
        onChange={(v) => setValues(v)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  stepSize: 1,
};

export const StepSize = Template.bind({});
StepSize.args = {
  ...Default.args,
  stepSize: 10,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Range: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState<TSliderValues>([24, 33]);

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        {...args}
        min={0}
        max={100}
        values={value}
        onChange={(v) => setValue(v)}
      />
    </div>
  );
};

export const RangeDisabled = Range.bind({});
RangeDisabled.args = {
  disabled: true,
};

export const IsFetching = Template.bind({});
IsFetching.args = {
  ...Default.args,
  isFetching: true,
};
