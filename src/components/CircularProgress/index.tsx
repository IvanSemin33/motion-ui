import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";

import { GoSync as LoadingIcon } from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";

export enum ECircularProgressColor {
  PRIMARY = "primary",
  ERROR = "error",
  SUCCESS = "success",
}

export enum ECircularProgressSize {
  SMALL = "small",
  MEDIUM = "medium",
}

export interface ICircularProgressOwnProps extends HTMLMotionProps<"div"> {
  color?: ECircularProgressColor;
  isFetching?: boolean;
  size?: ECircularProgressSize;
}

export type TCircularProgressRef = HTMLDivElement;

const CircularProgress = wrapper<
  TCircularProgressRef,
  ICircularProgressOwnProps
>(({ color, isFetching, size, className, ...containerProps }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={classNames(
        styles.container,
        className,
        color && styles[color],
        size && styles[size],
        isFetching && styles.isFetching
      )}
      {...containerProps}
    >
      <LoadingIcon className={styles.icon} />
    </motion.div>
  );
});

CircularProgress.defaultProps = {
  color: ECircularProgressColor.PRIMARY,
  size: ECircularProgressSize.MEDIUM,
};

export interface ICircularProgressProps
  extends React.ComponentProps<typeof CircularProgress> {}

export default CircularProgress;
