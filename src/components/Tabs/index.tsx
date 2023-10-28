import {
  Children,
  cloneElement,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  useState,
} from 'react'

import classNames from 'classnames'
import { motion } from 'framer-motion'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'
import Tab, { ETabVariants, ITabProps } from '../Tab'

export type ETabsVariants = ETabVariants
export const ETabsVariants = ETabVariants

export type TTabsValue = string | number

export interface ITabsOwnProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  children: React.ReactNode
  className?: string
  isFetching?: boolean
  onChange?: (value: TTabsValue) => void
  value: TTabsValue
  variant?: ETabsVariants
}

export type TTabsRef = HTMLDivElement

const Tabs = wrapper<TTabsRef, ITabsOwnProps>(
  ({ children, className, isFetching, value, variant, onChange, ...containerProps }, ref) => {
    const [activeTabRef, setActiveTabRef] = useState<HTMLDivElement | null>(null)

    const renderChildren = () => {
      return Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return null
        }

        if (child.type !== Tab) {
          throw new Error('`Tabs` children should be of type `Tab`.')
        }

        const TabComponent = child as ReactElement<ITabProps>
        const { props: childProps } = TabComponent

        return cloneElement(TabComponent, {
          ref: (ref: HTMLDivElement) => {
            if (ref && childProps.value === value) {
              setActiveTabRef(ref)
            }
          },
          isFetching,
          variant,
          active: childProps.value === value,
          onClick: ((e) => {
            if (onChange && !isFetching) {
              onChange(childProps.value)
              setActiveTabRef(e.currentTarget)
            }
          }) as React.MouseEventHandler<HTMLDivElement>,
        })
      })
    }

    return (
      <div ref={ref} className={classNames(styles.container, className)} {...containerProps}>
        {renderChildren()}
        <motion.span
          className={styles.indicator}
          animate={{ x: activeTabRef?.offsetLeft, width: activeTabRef?.offsetWidth }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        />
      </div>
    )
  }
)

Tabs.defaultProps = {
  variant: ETabsVariants.DEFAULT,
}

export interface ITabssProps extends React.ComponentProps<typeof Tabs> {}

export default Tabs
