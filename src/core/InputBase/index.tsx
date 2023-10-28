import React, { forwardRef } from "react";

import classNames from "classnames";

import styles from "./index.module.scss";
import { IconType } from "react-icons";

export enum EInputBaseColors {
  PRIMARY = "primary",
  SUCCESS = "success",
  ERROR = "error",
}

export enum EInputBaseVariants {
  STANDARD = "standard",
  FILLED = "filled",
  OUTLINED = "outlined",
}

export interface InputBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  color?: EInputBaseColors;
  disabled?: boolean;
  helperText?: string;
  IconEnd?: IconType;
  IconStart?: IconType;
  isFetching?: boolean;
  isFocused?: boolean;
  label?: string;
  variant?: EInputBaseVariants;
}

export type InputBaseRef = HTMLDivElement;

const InputBase = forwardRef<InputBaseRef, InputBaseProps>(
  (
    {
      IconStart,
      IconEnd,
      className,
      variant,
      disabled,
      helperText,
      label,
      color,
      isFetching,
      isFocused,
      children,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          variant && styles[variant],
          color && styles[color],
          disabled && styles.disabled,
          isFocused && styles.isFocused,
          isFetching && styles.isFetching,
          className
        )}
        {...restProps}
      >
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputWrapper}>
          {IconStart && <IconStart className={styles.icon} size={20} />}
          {children}
          {IconEnd && <IconEnd className={styles.icon} size={20} />}
        </div>
        {helperText && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

InputBase.defaultProps = {
  color: EInputBaseColors.PRIMARY,
  disabled: false,
  variant: EInputBaseVariants.FILLED,
};

export default InputBase;
