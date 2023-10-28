import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export enum ELinkColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ILinkOwnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  color?: ELinkColors
  underline?: boolean
  isFetching?: boolean
}

export type TLinkRef = HTMLAnchorElement

const defaultProps = {
  color: ELinkColors.PRIMARY,
  underline: false,
  isFetching: false,
}

const Link = wrapper<TLinkRef, ILinkOwnProps>(
  ({ children, color, underline, isFetching, className, ...linkProps }, ref) => {
    return (
      <a
        ref={ref}
        className={classNames(
          styles.container,
          color && styles[color],
          underline && styles.underline,
          isFetching && styles.isFetching,
          className
        )}
        {...linkProps}
      >
        {children}
      </a>
    )
  }
)

Link.defaultProps = defaultProps

export interface ILinkProps extends React.ComponentProps<typeof Link> {}

export default Link
