import classNames from "classnames";

import {
  GoCheck as CheckIcon,
  GoDotFill as EllipseIcon,
  GoSquareFill as RectangleIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";

export enum ERadioVariants {
  STANDARD = "standard",
  FILLED = "filled",
  OUTLINED = "outlined",
}

export enum ERadioSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum ERadioShapes {
  CIRCLE = "circle",
  SQUARE = "square",
}

export interface IRadioOwnProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  checked?: boolean;
  disabled?: boolean;
  isFetching?: boolean;
  label?: string;
  shape?: ERadioShapes;
  size?: ERadioSizes;
  variant?: ERadioVariants;
}

export type TRadioRef = HTMLLabelElement;

const Radio = wrapper<TRadioRef, IRadioOwnProps>(
  (
    {
      shape,
      isFetching,
      variant,
      checked,
      disabled,
      size,
      label,
      className,
      ...inputProps
    },
    ref
  ) => {
    const renderIcon = () => {
      if (checked) {
        if (variant === "standard") {
          return shape === "square" ? <RectangleIcon /> : <EllipseIcon />;
        } else {
          return <CheckIcon />;
        }
      }
      return null;
    };

    return (
      <label
        ref={ref}
        className={classNames(
          styles.container,
          size && styles[size],
          variant && styles[variant],
          shape && styles[shape],
          disabled && styles.disabled,
          checked && styles.checked,
          isFetching && styles.isFetching,
          className
        )}
      >
        <input
          className={styles.input}
          type="radio"
          disabled={disabled}
          checked={checked}
          {...inputProps}
        />
        <span className={styles.checkmark}>{renderIcon()}</span>
        {label && <div className={styles.label}>{label}</div>}
      </label>
    );
  }
);

Radio.defaultProps = {
  checked: false,
  disabled: false,
  shape: ERadioShapes.CIRCLE,
  size: ERadioSizes.MEDIUM,
  variant: ERadioVariants.FILLED,
};

export interface IRadioProps extends React.ComponentProps<typeof Radio> {}

export default Radio;
