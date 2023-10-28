import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'
import Radio, { ERadioShapes, ERadioSizes, ERadioVariants } from '../Radio'

export type RadioGroupOption = {
  value: string
  label: string
}

export interface IRadioGroupOwnProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabled?: boolean
  isFetching?: boolean
  name?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string | null) => void
  options: RadioGroupOption[]
  row?: boolean
  shape?: ERadioShapes
  size?: ERadioSizes
  value?: string | null
  variant?: ERadioVariants
}

export type TRadioGroupRef = HTMLDivElement

const RadioGroup = wrapper<TRadioGroupRef, IRadioGroupOwnProps>(
  (
    {
      className,
      disabled,
      isFetching,
      name,
      onChange,
      options,
      row,
      shape,
      size,
      value,
      variant,
      ...containerProps
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="radiogroup"
        className={classNames(styles.container, row && styles.row, size && styles[size], className)}
        {...containerProps}
      >
        <div className={styles.options}>
          {options?.map((option) => (
            <Radio
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={disabled}
              key={option.value}
              label={option.label}
              onChange={(e) => onChange(e, option.value)}
              shape={shape}
              size={size}
              variant={variant}
              isFetching={isFetching}
            />
          ))}
        </div>
      </div>
    )
  }
)

RadioGroup.defaultProps = {
  disabled: false,
  row: false,
  shape: ERadioShapes.CIRCLE,
  size: ERadioSizes.MEDIUM,
  variant: ERadioVariants.FILLED,
}

export interface IRadioGroupProps extends React.ComponentProps<typeof RadioGroup> {}

export default RadioGroup
