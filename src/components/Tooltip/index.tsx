import { cloneElement, Fragment, useRef, useState } from 'react'

import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'
import Popper, { EPopperPosition, IPopperProps, TPopperRef } from '../Popper'

export const ETooltipPosition = EPopperPosition

export interface ITooltipOwnProps extends Omit<IPopperProps, 'children' | 'anchorEl' | 'open'> {
  children: React.ReactElement
  className?: string
  title: string
}

export type TTooltipRef = TPopperRef

const Tooltip = wrapper<TTooltipRef, ITooltipOwnProps>(
  ({ className, children, title, ...popperProps }, ref) => {
    const [isHover, setIsHover] = useState(false)
    const anchorElRef = useRef<HTMLElement | null>(null)

    const handleMouseEnter = () => {
      setIsHover(true)
    }

    const handleMouseLeave = () => {
      setIsHover(false)
    }

    const anchorEl = cloneElement(children, {
      ref: anchorElRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    })

    return (
      <Fragment>
        <Popper
          ref={ref}
          className={classNames(styles.container, className)}
          {...popperProps}
          anchorEl={anchorElRef.current}
          open={isHover}
        >
          <div className={styles.title}>{title}</div>
        </Popper>
        {anchorEl}
      </Fragment>
    )
  }
)

Tooltip.defaultProps = {}

export interface ITooltipProps extends React.ComponentProps<typeof Tooltip> {}

export default Tooltip
