import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export interface IBreadcrumbsOwnProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
  maxItems?: number
  isFetching?: boolean
}

export type TBreadcrumbsRef = HTMLDivElement

const defaultProps = {
  maxItems: 8,
  isFetching: false,
}

const Breadcrumbs = wrapper<TBreadcrumbsRef, IBreadcrumbsOwnProps>(
  ({ children, maxItems = 8, isFetching, className, ...containerProps }, ref) => {
    const startItemsCount = Math.floor(maxItems / 2)
    const endItemsCount = maxItems - startItemsCount

    const ellipsisIndex = startItemsCount
    const endItemsIndex = children.length - endItemsCount

    const renderSeparator = (index: number) => {
      return (
        <span key={`${index}-separator`} className={styles.separator}>
          /
        </span>
      )
    }

    const renderCrumb = (child: React.ReactNode, index: number) => {
      if (maxItems && maxItems < children.length) {
        if (index < ellipsisIndex) {
          return (
            <div className={styles.crumb} key={index}>
              {child}
              {renderSeparator(index)}
            </div>
          )
        }
        if (index === ellipsisIndex) {
          return <div className={styles.ellipsis}>...</div>
        }
        if (index > ellipsisIndex && index < endItemsIndex) {
          return null
        }
        if (index >= endItemsIndex) {
          return (
            <div className={styles.crumb} key={index}>
              {renderSeparator(index)}
              {child}
            </div>
          )
        }
      } else {
        return (
          <div className={styles.crumb} key={index}>
            {child}
            {index !== children.length - 1 && renderSeparator(index)}
          </div>
        )
      }
      return null
    }

    return (
      <div
        ref={ref}
        className={classNames(styles.container, isFetching && styles.isFetching, className)}
        {...containerProps}
      >
        {children.map(renderCrumb)}
      </div>
    )
  }
)

Breadcrumbs.defaultProps = defaultProps

export interface IBreadcrumbsProps extends React.ComponentProps<typeof Breadcrumbs> {}

export default Breadcrumbs
