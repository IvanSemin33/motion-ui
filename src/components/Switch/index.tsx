import classNames from "classnames";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";
import { IconType } from "react-icons";

export enum ESwitchSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface ISwitchOwnProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange"
  > {
  BackIcon?: IconType;
  checked?: boolean;
  CheckedBackIcon?: IconType;
  CheckedIcon?: IconType;
  disabled?: boolean;
  Icon?: IconType;
  isFetching?: boolean;
  onChange?: (checked: boolean) => void;
  size?: ESwitchSize;
}

export type TSwitchRef = HTMLDivElement;

const Switch = wrapper<TSwitchRef, ISwitchOwnProps>(
  (
    {
      BackIcon,
      checked,
      CheckedBackIcon,
      CheckedIcon,
      disabled,
      Icon,
      isFetching,
      onChange,
      size,
      className,
      ...inputProps
    },
    ref
  ) => {
    const renderIcon = () => {
      if (checked) {
        if (CheckedIcon) {
          return <CheckedIcon className={styles.icon} />;
        }
      } else if (Icon) {
        return <Icon className={styles.icon} />;
      }
      return null;
    };

    const renderBackIcon = () => {
      if (checked) {
        if (CheckedBackIcon) {
          return <CheckedBackIcon className={styles.backIcon} />;
        }
      } else if (BackIcon) {
        return <BackIcon className={styles.backIcon} />;
      }
      return null;
    };

    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          size && styles[size],
          disabled && styles.disabled,
          isFetching && styles.isFetching,
          checked && styles.checked,
          className
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className={styles.input}
          {...inputProps}
        />
        <div className={styles.back}>{renderBackIcon()}</div>
        <span className={styles.handle}>{renderIcon()}</span>
      </div>
    );
  }
);

Switch.defaultProps = {
  checked: false,
  disabled: false,
  isFetching: false,
  size: ESwitchSize.MEDIUM,
};

export interface ISwitchProps extends React.ComponentProps<typeof Switch> {}

export default Switch;
