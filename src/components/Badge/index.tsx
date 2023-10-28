import { HTMLAttributes, useMemo } from 'react'

import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export enum EBadgeColors {
  SECONDARY = 'secondary',
  SUCCSESS = 'success',
  ERROR = 'error',
}

export enum EBadgePositions {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export enum EBadgeVariants {
  STANDARD = 'standard',
  DOT = 'dot',
}

export interface IBadgeOwnProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  color?: EBadgeColors
  content?: React.ReactNode
  height?: number
  width?: number
  invisible?: boolean
  isFetching?: boolean
  max?: number
  position?: EBadgePositions
  variant?: EBadgeVariants
  borderWidth?: number
  animation?: boolean
}

export type TBadgeRef = HTMLDivElement

const Badge = wrapper<TBadgeRef, IBadgeOwnProps>(
  (
    {
      children,
      color,
      content,
      height,
      width,
      invisible,
      isFetching,
      max,
      position,
      variant,
      borderWidth,
      animation,
      className,
      ...containerProps
    },
    ref
  ) => {
    const formatedContent = useMemo(() => {
      if (variant === EBadgeVariants.DOT) {
        return null
      }

      if (content && typeof content === 'number' && max && content > max) {
        return `${max}+`
      }

      return content
    }, [content, max, variant])

    const isBig = useMemo(() => height && height >= 20, [height])

    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          variant && styles[variant],
          position && styles[position],
          color && styles[color],
          invisible && styles.invisible,
          isFetching && styles.isFetching,
          borderWidth && styles.border,
          formatedContent && styles.hasContent,
          isBig && styles.big,
          animation && styles.animation,
          className
        )}
        {...containerProps}
      >
        {children}
        <span
          className={styles.badge}
          style={{
            height: height,
            width: width,
            minHeight: height,
            minWidth: width,
            outlineWidth: borderWidth,
          }}
        >
          {formatedContent}
        </span>
      </div>
    )
  }
)

Badge.defaultProps = {
  color: EBadgeColors.SECONDARY,
  height: 20,
  width: 20,
  invisible: false,
  isFetching: false,
  max: 99,
  position: EBadgePositions.TOP_RIGHT,
  variant: EBadgeVariants.STANDARD,
  borderWidth: 0,
  animation: false,
}

export interface IBadgeProps extends React.ComponentProps<typeof Badge> {}

export default Badge
