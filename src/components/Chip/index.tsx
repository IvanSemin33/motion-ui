import classNames from "classnames";

import { GoX as CloseIcon } from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";
import { IconType } from "react-icons";

export enum EChipColors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DARK = "dark",
}

export enum EChipVariants {
  FILLED = "filled",
  OUTLINED = "outlined",
}

export enum EChipSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface IChipOwnProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: EChipColors;
  disabled?: boolean;
  Icon?: IconType;
  label: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDelete?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  size?: EChipSizes;
  variant?: EChipVariants;
  isFetching?: boolean;
  className?: string;
}

export type TChipRef = HTMLDivElement;

const defaultProps = {
  color: EChipColors.PRIMARY,
  disabled: false,
  size: EChipSizes.MEDIUM,
  variant: EChipVariants.FILLED,
};

const Chip = wrapper<TChipRef, IChipOwnProps>(
  (
    {
      color,
      disabled,
      Icon,
      label,
      onClick,
      onDelete,
      size,
      variant,
      isFetching,
      className,
      ...containerProps
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        key="chip"
        className={classNames(
          styles.container,
          color && styles[color],
          size && styles[size],
          variant && styles[variant],
          disabled && styles.disabled,
          onClick && styles.clickable,
          onDelete && styles.deletable,
          isFetching && styles.isFetching,
          className
        )}
        onClick={onClick}
        {...containerProps}
      >
        {Icon && <Icon className={styles.icon} />}
        {label}
        {onDelete && (
          <CloseIcon className={styles.deleteIcon} onClick={onDelete} />
        )}
      </div>
    );
  }
);

Chip.defaultProps = defaultProps;

export interface IChipProps extends React.ComponentProps<typeof Chip> {}

export default Chip;
