import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export enum ETextAreaColors {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ETextAreaVariants {
  STANDARD = 'standard',
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

export interface ITextAreaOwnProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: ETextAreaColors
  disabled?: boolean
  helperText?: string
  isFetching?: boolean
  label?: string
  rows?: number
  variant?: ETextAreaVariants
}

export type TTextAreaRef = HTMLDivElement

const defaultProps = {
  color: ETextAreaColors.PRIMARY,
  disabled: false,
  variant: ETextAreaVariants.FILLED,
  rows: 2,
}

const TextArea = wrapper<TTextAreaRef, ITextAreaOwnProps>(
  (
    { className, color, disabled, helperText, isFetching, label, rows, variant, ...textareaProps },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState<boolean>(false)

    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          variant && styles[variant],
          color && styles[color],
          disabled && styles.disabled,
          isFocus && styles.isFocus,
          isFetching && styles.isFetching,
          className
        )}
      >
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.wrapper}>
          <textarea
            className={classNames(styles.textarea)}
            disabled={disabled}
            rows={rows}
            onFocus={() => {
              setIsFocus(true)
            }}
            onBlur={() => {
              setIsFocus(false)
            }}
            {...textareaProps}
          />
        </div>
        {helperText && <span className={styles.helperText}>{helperText}</span>}
      </div>
    )
  }
)

TextArea.defaultProps = defaultProps

export interface ITextAreaProps extends React.ComponentProps<typeof TextArea> {}

export default TextArea
