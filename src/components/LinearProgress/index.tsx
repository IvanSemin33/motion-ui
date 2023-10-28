import { useEffect } from 'react'

import classNames from 'classnames'
import {
  HTMLMotionProps,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'

import styles from './index.module.scss'

import wrapper from '../../utils/wrapper'

export enum ELinearProgressColor {
  PRIMARY = 'primary',
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum ELinearProgressLabelPosition {
  TOP = 'top',
  RIGHT = 'right',
}

export enum ELinearProgressSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export interface ILinearProgressOwnProps extends HTMLMotionProps<'div'> {
  color?: ELinearProgressColor
  isFetching?: boolean
  labelPosition?: ELinearProgressLabelPosition
  renderLabel?: () => string
  size?: ELinearProgressSize
  value: number
}

export type TLinearProgressRef = HTMLDivElement

const LinearProgress = wrapper<TLinearProgressRef, ILinearProgressOwnProps>(
  ({ color, isFetching, labelPosition, size, value, renderLabel, ...containerProps }, ref) => {
    const x = useMotionValue(0)
    const progressX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 })

    const transformProgress = useMotionTemplate`translateX(${progressX}%)`

    useEffect(() => {
      x.set(value)
    }, [value])

    return (
      <motion.div
        ref={ref}
        className={classNames(
          styles.container,
          color && styles[color],
          size && styles[size],
          isFetching && styles.isFetching,
          labelPosition && styles[labelPosition]
        )}
        {...containerProps}
      >
        <div className={classNames(styles.label, renderLabel && styles.customLabel)}>
          {renderLabel ? renderLabel() : `${value}%`}
        </div>
        <div className={styles.progressWrapper}>
          <motion.div
            className={styles.progress}
            style={{
              transform: transformProgress,
            }}
          />
        </div>
      </motion.div>
    )
  }
)

LinearProgress.defaultProps = {
  color: ELinearProgressColor.PRIMARY,
  labelPosition: ELinearProgressLabelPosition.TOP,
  size: ELinearProgressSize.MEDIUM,
}

export interface ILinearProgressProps extends React.ComponentProps<typeof LinearProgress> {}

export default LinearProgress
