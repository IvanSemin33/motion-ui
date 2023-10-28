import { useState } from 'react'

import { FILE_IMAGE_FORMATS } from '../../constants'
import { className, disabled, ECategories, isFetching } from '../../utils/argTypes'

import Upload, { EUploadType, TUploadValue } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Upload',
  // component: Upload,
  zeplinLink: '',
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    buttonText: {
      description: 'Text for button',
      control: {
        type: 'text',
      },
      table: {
        category: ECategories.APPEARANCE,
        type: { summary: 'string' },
      },
    },
    className,
    description: {
      description: 'Description for drag and drop area',
      control: {
        type: 'text',
      },
      table: {
        category: ECategories.APPEARANCE,
        type: { summary: 'string' },
      },
    },
    disabled,
    format: {
      description: 'Files formats for upload',
      control: {
        type: 'array',
      },
      table: {
        category: ECategories.BEHAVIOR,
        type: { summary: 'string[]' },
      },
    },
    isFetching,
    label: {
      control: {
        type: 'text',
      },
      description: 'Label for drag and drop area',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
    multiple: {
      description: 'Allow to upload multiple files',
      control: {
        type: 'boolean',
      },
      table: {
        category: ECategories.BEHAVIOR,
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback for change value',
      table: {
        category: ECategories.EVENTS,
        type: { summary: '(value: TUploadValue) => void' },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: 'Callback for select files',
      table: {
        category: ECategories.EVENTS,
        type: { summary: '(value: TUploadValue) => void' },
      },
    },
    selected: {
      description: 'Selected files',
      control: {
        type: 'array',
      },
      table: {
        category: ECategories.DATA,
        type: { summary: 'TUploadValue' },
      },
    },
    size: {
      description: 'Max file size in bytes',
      control: {
        type: 'number',
      },
      table: {
        category: ECategories.BEHAVIOR,
        type: { summary: 'number' },
      },
    },
    type: {
      control: {
        type: 'radio',
        options: Object.values(EUploadType),
      },
      description: 'Type of upload',
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'EUploadType',
          detail: Object.values(EUploadType).join(' | '),
        },
        defaultValue: {
          summary: EUploadType.FILE,
        },
      },
    },
    value: {
      description: 'Value of upload',
      control: {
        type: 'array',
      },
      type: {
        name: 'other',
        value: 'TUploadValue',
        required: true,
      },
      table: {
        category: ECategories.DATA,
        type: {
          summary: 'TUploadValue',
          detail: 'File[]',
        },
      },
    },
    mainLabel: {
      description: 'Label for main file',
      control: {
        type: 'text',
      },
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: 'string',
        },
      },
    },
  },
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = (args) => {
  const [value, setValue] = useState<TUploadValue>([])

  return (
    <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />
  )
}

const Select: ComponentStory<typeof Upload> = (args) => {
  const [value, setValue] = useState<TUploadValue>([])
  const [selected, setSelected] = useState<TUploadValue>([])

  return (
    <Upload
      {...args}
      value={value}
      onChange={setValue}
      selected={selected}
      onSelect={setSelected}
      size={1024 * 1024 * 3}
      mainLabel="Main"
    />
  )
}

export const Image = Template.bind({})
Image.args = {
  label: 'Select image and drag it here',
  description: 'Image size must be less than 3MB.',
  buttonText: 'Select image',
  type: EUploadType.IMAGE,
  format: FILE_IMAGE_FORMATS,
}

export const ImageMultiple = Template.bind({})
ImageMultiple.args = {
  ...Image.args,
  multiple: true,
}

export const ImageMultipleSelect = Select.bind({})
ImageMultipleSelect.args = {
  ...ImageMultiple.args,
}

export const File = Template.bind({})
File.args = {
  label: 'Select file and drag it here',
  description: 'File size must be less than 3MB.',
  buttonText: 'Select file',
  type: EUploadType.FILE,
}

export const FileMultiple = Template.bind({})
FileMultiple.args = {
  ...File.args,
  multiple: true,
}

const Loading: ComponentStory<typeof Upload> = (args) => {
  const [value, setValue] = useState<TUploadValue>([])
  const [selected, setSelected] = useState<TUploadValue>([])

  const mockFetch = () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(
          'https://media.licdn.com/dms/image/D4D03AQG27AyrybPyKg/profile-displayphoto-shrink_800_800/0/1679941446897?e=1687996800&v=beta&t=T3ZbxzMG7csU09iDJ75tdD6Bve7v771aDuJQFYmaz4M'
        )
      }, 3000)
    })
  }

  const onChange = async (newValue: TUploadValue) => {
    let nextValue = newValue
    const hasNewValues = newValue.length > value.length

    if (hasNewValues) {
      setValue(newValue.map((file) => ({ ...file, loading: true })))

      nextValue = await Promise.all(
        newValue.map(async (file) => {
          const url = await mockFetch()
          return {
            ...file,
            url,
            loading: false,
          }
        })
      )
    }

    setValue(nextValue)
  }

  return (
    <Upload
      {...args}
      value={value}
      onChange={onChange}
      selected={selected}
      onSelect={setSelected}
      size={1024 * 1024 * 3}
      multiple
      mainLabel="Main"
    />
  )
}

export const LoadingImage = Loading.bind({})
LoadingImage.args = {
  label: 'Select image and drag it here',
  description: 'Image size must be less than 3MB.',
  buttonText: 'Select image',
  type: EUploadType.IMAGE,
  format: FILE_IMAGE_FORMATS,
}

export const LoadingFile = Loading.bind({})
LoadingFile.args = {
  label: 'Select file and drag it here',
  description: 'File size must be less than 3MB.',
  buttonText: 'Select file',
  type: EUploadType.FILE,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Image.args,
  disabled: true,
}

export const IsFetching = Template.bind({})
IsFetching.args = {
  ...Image.args,
  isFetching: true,
}
