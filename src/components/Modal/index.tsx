import { useEffect } from 'react'

import classNames from 'classnames'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { createPortal } from 'react-dom'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export interface IModalOwnProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  hideBackdrop?: boolean
  onClose?: () => void
  open: boolean
}

export type TModalRef = HTMLDivElement

const Modal = wrapper<TModalRef, IModalOwnProps>(
  ({ children, open, onClose, className, hideBackdrop, ...containerProps }, ref) => {
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }, [open])

    const onBackdropClick = () => {
      onClose?.()
    }

    return createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            key="modal"
            className={classNames(styles.container, className)}
            {...containerProps}
            style={{
              ...containerProps.style,
            }}
          >
            <div
              className={classNames(styles.backdrop, hideBackdrop && styles.invisible)}
              onClick={onBackdropClick}
            />
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )
  }
)

Modal.defaultProps = {
  hideBackdrop: false,
}

export interface IModalProps extends React.ComponentProps<typeof Modal> {}

export default Modal
