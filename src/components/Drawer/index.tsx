import classNames from 'classnames'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'
import Modal from '../Modal'

export enum EDrawerVariants {
  PERSISTENT = 'persistent',
  TEMPORARY = 'temporary',
  PERMANENT = 'permanent',
}

export enum EDrawerPositions {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface IDrawerOwnProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode
  className?: string
  header?: React.ReactNode
  onClose?: () => void
  open?: boolean
  position?: EDrawerPositions
  variant?: EDrawerVariants
}

export type TDrawerRef = HTMLDivElement

const Drawer = wrapper<TDrawerRef, IDrawerOwnProps>(
  ({ open, onClose, variant, header, children, className, position, ...containerProps }, ref) => {
    const isGorizontal = position === EDrawerPositions.TOP || position === EDrawerPositions.BOTTOM

    const renderDrawerBody = (props?: HTMLMotionProps<'div'>) => {
      return (
        <motion.div
          ref={ref}
          key="drawer"
          className={classNames(
            styles.container,
            variant && styles[variant],
            position && styles[position],
            open && styles.open,
            className
          )}
          {...props}
          {...containerProps}
        >
          {header}
          {children}
        </motion.div>
      )
    }

    const renderDrawer = () => {
      switch (variant) {
        case EDrawerVariants.PERMANENT:
          return renderDrawerBody()
        case EDrawerVariants.TEMPORARY:
          return (
            <Modal open={!!open} onClose={onClose} style={{ zIndex: 3000 }}>
              {renderDrawerBody({
                initial: {
                  width: isGorizontal ? '100vw' : 0,
                  height: isGorizontal ? 0 : '100vh',
                },
                animate: {
                  width: isGorizontal ? '100vw' : 'fit-content',
                  height: isGorizontal ? 'fit-content' : '100vh',
                  transition: { delay: 0, duration: 0.2 },
                },
                exit: {
                  width: isGorizontal ? '100vw' : 0,
                  height: isGorizontal ? 0 : '100vh',
                  transition: { duration: 0.2, delay: 0.2 },
                },
              })}
            </Modal>
          )
        case EDrawerVariants.PERSISTENT:
          return (
            <AnimatePresence>
              {open &&
                renderDrawerBody({
                  initial: {
                    width: 0,
                  },
                  animate: { width: 'fit-content', transition: { delay: 0, duration: 0.2 } },
                  exit: { width: 0, transition: { duration: 0.2, delay: 0.2 } },
                })}
            </AnimatePresence>
          )
        default:
          return null
      }
    }

    return renderDrawer()
  }
)

Drawer.defaultProps = {
  variant: EDrawerVariants.TEMPORARY,
  position: EDrawerPositions.LEFT,
  open: false,
}

export interface IDrawerProps extends React.ComponentProps<typeof Drawer> {}

export default Drawer
