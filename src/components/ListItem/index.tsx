import classNames from 'classnames'
import { noop } from 'lodash'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export enum EListItemColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IListItemOwnProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  color?: EListItemColors
  disabled?: boolean
  end?: React.ReactNode
  isFetching?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  selected?: boolean
  start?: React.ReactNode
  subText?: string
}
export type TListItemRef = HTMLDivElement

const ListItem = wrapper<TListItemRef, IListItemOwnProps>(
  (
    {
      children,
      color,
      disabled,
      end,
      isFetching,
      onClick,
      selected,
      start,
      subText,
      className,
      ...containerProps
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          subText && styles.withSubText,
          onClick && styles.clickable,
          selected && styles.selected,
          color && styles[color],
          disabled && styles.disabled,
          isFetching && styles.isFetching,
          className
        )}
        onClick={disabled ? noop : onClick}
        {...containerProps}
      >
        {start && (
          <div
            className={styles.start}
            onClick={(e) => {
              const renderStartProps = (start as JSX.Element)?.props
              if (renderStartProps?.onClick || renderStartProps?.onChange) {
                e.stopPropagation()
              }
            }}
          >
            {start}
          </div>
        )}
        <div className={styles.content}>
          {children}
          {subText && <div className={styles.subText}>{subText}</div>}
        </div>
        {end && (
          <div
            className={styles.end}
            onClick={(e) => {
              const renderEndProps = (end as JSX.Element)?.props
              if (renderEndProps?.onClick || renderEndProps?.onChange) {
                e.stopPropagation()
              }
            }}
          >
            {end}
          </div>
        )}
      </div>
    )
  }
)

ListItem.defaultProps = {
  color: EListItemColors.PRIMARY,
  disabled: false,
  isFetching: false,
  selected: false,
}

export interface IListItemProps extends React.ComponentProps<typeof ListItem> {}

export default ListItem
