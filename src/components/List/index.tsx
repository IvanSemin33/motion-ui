import { Children } from 'react'

import classNames from 'classnames'
import { HTMLMotionProps, motion, Variants } from 'framer-motion'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export interface IListOwnProps extends HTMLMotionProps<'ul'> {
  children?: React.ReactNode
}

export type TListRef = HTMLUListElement

const listVariants: Variants = {
  visible: {
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
}

const List = wrapper<TListRef, IListOwnProps>(({ children, className, ...listProps }, ref) => {
  return (
    <motion.ul
      ref={ref}
      className={classNames(styles.container, className)}
      animate="visible"
      variants={listVariants}
      {...listProps}
    >
      {Children.map(children, (child) => (
        <motion.li className={styles.item} initial={{ opacity: 0, y: 20 }} variants={itemVariants}>
          {child}
        </motion.li>
      ))}
    </motion.ul>
  )
})

List.defaultProps = {}

export interface IListProps extends React.ComponentProps<typeof List> {}

export default List
