import classNames from 'classnames'
import { AnimatePresence, HTMLMotionProps, motion, MotionStyle } from 'framer-motion'
import { createPortal } from 'react-dom'

import styles from './index.module.scss'

import { getElementZPosition } from '../../utils/common'
import wrapper from '../../utils/wrapper'

export enum EPopperPosition {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface IPopperOwnProps extends HTMLMotionProps<'div'> {
  anchorEl: HTMLElement | null
  //  FIXME: sometimes can't use arrow prop
  arrow?: boolean
  children?: React.ReactNode
  fixed?: boolean
  fullWidth?: boolean
  open?: boolean
  position?: EPopperPosition
}

type PopperPosition = {
  top?: number
  left?: number
  right?: number
  translateX: string
  translateY: string
  zIndex: number
}

export type TPopperRef = HTMLDivElement

const Popper = wrapper<TPopperRef, IPopperOwnProps>(
  (
    { fixed, arrow, open, anchorEl, children, position, className, fullWidth, ...containerProps },
    ref
  ) => {
    const getPopperPosition = (): PopperPosition => {
      const cords = anchorEl?.getBoundingClientRect()

      const scrollY = window.scrollY
      const scrollX = window.scrollX

      const { width = 0, height = 0, top = 0, bottom = 0, left = 0, right = 0 } = cords || {}

      const anchorZIndex = getElementZPosition(anchorEl) + 10

      const anchorWidth = width
      const anchorHeight = height

      const anchorTop = fixed ? top : top + scrollY
      const anchorBottom = fixed ? bottom : bottom + scrollY
      const anchorLeft = fixed ? left : left + scrollX
      const anchorRight = fixed ? right : right + scrollX

      const anchorHorizontalCenter = anchorLeft + anchorWidth / 2
      const anchorVerticalCenter = anchorTop + anchorHeight / 2

      const arrowPadding = arrow ? '8px' : '2px'

      switch (position) {
        case EPopperPosition.TOP:
          return {
            top: anchorTop,
            left: anchorHorizontalCenter,
            translateX: '-50%',
            translateY: `calc(-100% - ${arrowPadding})`,
            zIndex: anchorZIndex,
          }
        case EPopperPosition.TOP_LEFT:
          return {
            top: anchorTop,
            right: anchorHorizontalCenter,
            translateX: '0',
            translateY: `calc(-100% - ${arrowPadding})`,
            zIndex: anchorZIndex,
          }
        case EPopperPosition.TOP_RIGHT:
          return {
            top: anchorTop,
            left: anchorHorizontalCenter,
            translateX: '0',
            translateY: `calc(-100% - ${arrowPadding})`,
            zIndex: anchorZIndex,
          }
        case EPopperPosition.BOTTOM:
          return {
            top: anchorBottom,
            left: anchorHorizontalCenter,
            translateX: '-50%',
            translateY: `${arrowPadding}`,
            zIndex: anchorZIndex,
          }
        case EPopperPosition.BOTTOM_LEFT:
          return {
            top: anchorBottom,
            left: anchorHorizontalCenter,
            translateX: '-100%',
            translateY: `${arrowPadding}`,
            zIndex: anchorZIndex,
          }
        case EPopperPosition.BOTTOM_RIGHT:
          return {
            top: anchorBottom,
            left: anchorHorizontalCenter,
            translateX: '0',
            translateY: `${arrowPadding}`,
            zIndex: anchorZIndex,
          }
        case EPopperPosition.LEFT:
          return {
            top: anchorVerticalCenter,
            right: anchorRight,
            translateX: `-${arrowPadding}`,
            translateY: '-50%',
            zIndex: anchorZIndex,
          }
        case EPopperPosition.RIGHT:
          return {
            top: anchorVerticalCenter,
            left: anchorRight,
            translateX: `${arrowPadding}`,
            translateY: '-50%',
            zIndex: anchorZIndex,
          }
        default:
          return {
            top: anchorBottom,
            left: anchorHorizontalCenter,
            translateX: '-50%',
            translateY: `${arrowPadding}`,
            zIndex: anchorZIndex,
          }
      }
    }

    const mergePositions = (position: PopperPosition, style: MotionStyle) => {
      const { top, left, right, transform, zIndex } = style

      return {
        ...style,
        top: top !== undefined ? top : position.top,
        left: left !== undefined ? left : position.left,
        right: right !== undefined ? right : position.right,
        transform:
          transform !== undefined
            ? transform
            : `translate(${position.translateX}, ${position.translateY})`,
        zIndex: zIndex !== undefined ? zIndex : position.zIndex,
      }
    }

    const getWidth = () => {
      const cords = anchorEl?.getBoundingClientRect()
      return fullWidth ? cords?.width : 'auto'
    }

    return createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            key="popper"
            className={classNames(
              styles.container,
              position && styles[position],
              arrow && styles.arrow,
              className
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...containerProps}
            style={{
              width: getWidth(),
              position: fixed ? 'fixed' : 'absolute',
              ...mergePositions(getPopperPosition(), containerProps.style || {}),
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )
  }
)

Popper.defaultProps = {
  open: false,
  anchorEl: null,
  position: EPopperPosition.BOTTOM,
  arrow: false,
}

export interface IPopperProps extends React.ComponentProps<typeof Popper> {}

export default Popper
