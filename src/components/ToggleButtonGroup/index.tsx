import { Children, cloneElement, isValidElement } from 'react'

import classNames from 'classnames'
import { HTMLMotionProps, motion } from 'framer-motion'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'
import ToggleButton, {
  EToggleButtonColors,
  EToggleButtonSizes,
  EToggleButtonVariants,
  IToggleButtonProps,
} from '../ToggleButton'

export const EToggleButtonGroupColors = EToggleButtonColors
export type EToggleButtonGroupColors = EToggleButtonColors

export const EToggleButtonGroupVariants = EToggleButtonVariants
export type EToggleButtonGroupVariants = EToggleButtonVariants

export const EToggleButtonGroupSizes = EToggleButtonSizes
export type EToggleButtonGroupSizes = EToggleButtonSizes

type TValue = string | string[]

export interface IToggleButtonGroupOwnProps extends Omit<HTMLMotionProps<'div'>, 'onChange'> {
  children: React.ReactNode
  className?: string
  color?: EToggleButtonGroupColors
  customColor?: IToggleButtonProps['customColor']
  disabled?: boolean
  exclusive?: boolean
  isFetching?: boolean
  label?: string
  loading?: IToggleButtonProps['loading']
  onChange?: (value: TValue) => void
  size?: EToggleButtonGroupSizes
  value?: TValue
  variant?: EToggleButtonGroupVariants
}

export type TToggleButtonGroupRef = HTMLDivElement

const ToggleButtonGroup = wrapper<TToggleButtonGroupRef, IToggleButtonGroupOwnProps>(
  (
    {
      children,
      className,
      color,
      customColor,
      disabled,
      exclusive,
      isFetching,
      label,
      loading,
      onChange,
      size,
      value,
      variant,
      ...containerProps
    },
    ref
  ) => {
    const renderChildren = () => {
      return (
        <div className={styles.buttons}>
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return null

            if (child.type !== ToggleButton) {
              throw new Error('`ToggleButtonGroup` children should be of type `ToggleButton`.')
            }

            const ToggleButtonComponent = child as React.ReactElement<IToggleButtonProps>
            const { props: childProps } = ToggleButtonComponent

            return cloneElement(ToggleButtonComponent, {
              color,
              customColor,
              disabled,
              size,
              variant,
              loading,
              isFetching,
              selected: exclusive ? value === childProps.value : value?.includes(childProps.value),
              onClick: () => {
                if (onChange) {
                  if (exclusive) {
                    onChange(childProps.value)
                  } else {
                    const newValue = value as string[]
                    onChange(
                      newValue.includes(childProps.value)
                        ? newValue.filter((v) => v !== childProps.value)
                        : [...newValue, childProps.value]
                    )
                  }
                }
              },
            })
          })}
        </div>
      )
    }

    return (
      <motion.div ref={ref} {...containerProps} className={classNames(styles.container, className)}>
        {label && <label className={styles.label}>{label}</label>}
        {renderChildren()}
      </motion.div>
    )
  }
)

ToggleButtonGroup.defaultProps = {
  color: EToggleButtonGroupColors.PRIMARY,
  disabled: false,
  exclusive: false,
  isFetching: false,
  loading: false,
  size: EToggleButtonGroupSizes.MEDIUM,
  variant: EToggleButtonGroupVariants.CONTAINED,
}

export interface IToggleButtonGroupProps extends React.ComponentProps<typeof ToggleButtonGroup> {}

export default ToggleButtonGroup
