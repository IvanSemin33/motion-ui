export enum ECategories {
  DATA = 'Data',
  APPEARANCE = 'Appearance',
  BEHAVIOR = 'Behavior',
  STATE = 'State',
  EVENTS = 'Events',
}

type NodeParams = { description: string; required: boolean }
export const node = ({ description, required }: NodeParams) => ({
  control: {
    type: 'text',
  },
  description,
  type: {
    name: 'string',
    required,
  },
  table: {
    category: ECategories.DATA,
    type: {
      summary: 'node',
    },
  },
})

export const children = {
  control: {
    type: 'other',
  },
  description: 'The content of the component.',
  type: {
    name: 'string',
    required: true,
  },
  table: {
    category: ECategories.DATA,
    type: {
      summary: 'node',
    },
  },
}

type ColorParams = { colors: object; defaultValue: string; typeName: string }

export const color = ({ colors, defaultValue, typeName }: ColorParams) => ({
  control: {
    type: 'radio',
    options: Object.values(colors),
  },
  description: 'The color of the component.',
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: typeName,
      detail: Object.values(colors).join(' | '),
    },
    defaultValue: {
      summary: defaultValue,
    },
  },
})

type PositionParams = { positions: object; defaultValue: string; typeName: string }

export const position = ({ positions, defaultValue, typeName }: PositionParams) => ({
  control: {
    type: 'radio',
    options: Object.values(positions),
  },
  description: 'The positions of the component.',
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: typeName,
      detail: Object.values(positions).join(' | '),
    },
    defaultValue: {
      summary: defaultValue,
    },
  },
})

export const disabled = {
  control: {
    type: 'boolean',
  },
  description: 'If true, the component will be disabled.',
  table: {
    category: ECategories.STATE,
    type: {
      summary: 'boolean',
    },
    defaultValue: {
      summary: 'false',
    },
  },
}

type IconParams = { description: string }

export const icon = ({ description }: IconParams) => ({
  control: {
    type: 'object',
  },
  description,
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: 'Icon',
    },
  },
})

type SizeParams = { sizes: object; defaultValue: string; typeName: string }

export const size = ({ sizes, defaultValue, typeName }: SizeParams) => ({
  control: {
    type: 'radio',
    options: Object.values(sizes),
  },
  description: 'The size of the component.',
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: typeName,
      detail: Object.values(sizes).join(' | '),
    },
    defaultValue: {
      summary: defaultValue,
    },
  },
})

type VariantParams = { variants: object; defaultValue: string; typeName: string }

export const variant = ({ variants, defaultValue, typeName }: VariantParams) => ({
  control: {
    type: 'radio',
    options: Object.values(variants),
  },
  description: 'The variant of the component.',
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: typeName,
      detail: Object.values(variants).join(' | '),
    },
    defaultValue: {
      summary: defaultValue,
    },
  },
})

export const isFetching = {
  control: {
    type: 'boolean',
  },
  description: 'If true, the component will be in a fetching state.',
  table: {
    category: ECategories.STATE,
    type: {
      summary: 'boolean',
    },
    defaultValue: {
      summary: 'false',
    },
  },
}

export const onClick = {
  action: 'onClick',
  description: 'Callback fired when the component is clicked.',
  table: {
    category: ECategories.EVENTS,
    type: {
      summary: 'function',
    },
  },
}

export const onChange = {
  action: 'onChange',
  description: 'Callback fired when the component is changed.',
  table: {
    category: ECategories.EVENTS,
    type: {
      summary: 'function',
    },
  },
}

export const label = {
  control: {
    type: 'text',
  },
  description: 'The label to display next to the component.',
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: 'string',
    },
  },
}

type HeightParams = { minValue: number; maxValue: number; defaultValue: number }

export const height = ({ defaultValue, minValue, maxValue }: HeightParams) => ({
  description: 'The height of the component.',
  control: {
    type: 'range',
    min: minValue,
    max: maxValue,
    step: 1,
  },
  table: {
    category: ECategories.APPEARANCE,
    defaultValue: { summary: defaultValue },
    type: { summary: 'number' },
  },
})

type WidthParams = { minValue: number; maxValue: number; defaultValue: number }

export const width = ({ defaultValue, minValue, maxValue }: WidthParams) => ({
  description: 'The width of the component.',
  control: {
    type: 'range',
    min: minValue,
    max: maxValue,
    step: 1,
  },
  table: {
    category: ECategories.APPEARANCE,
    defaultValue: { summary: defaultValue },
    type: { summary: 'number' },
  },
})

export const className = {
  control: {
    type: 'text',
  },
  description: 'The className of the component.',
  table: {
    category: ECategories.APPEARANCE,
    type: {
      summary: 'string',
    },
  },
}
