import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'
import Popper, { EPopperPosition, IPopperProps, TPopperRef } from '../Popper'

export const EMenuPosition = EPopperPosition

export interface IMenuOwnProps extends IPopperProps {
  className?: string
}

export type TMenuRef = TPopperRef

const Menu = wrapper<TMenuRef, IMenuOwnProps>(({ className, ...popperProps }, ref) => {
  return <Popper ref={ref} className={classNames(styles.container, className)} {...popperProps} />
})

Menu.defaultProps = {
  open: false,
  anchorEl: null,
  position: EMenuPosition.BOTTOM,
  arrow: false,
}

export interface IMenuProps extends React.ComponentProps<typeof Menu> {}

export default Menu
