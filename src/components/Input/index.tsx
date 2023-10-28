import React, { useState } from "react";

import classNames from "classnames";

import styles from "./index.module.scss";

import InputBase, {
  EInputBaseColors,
  EInputBaseVariants,
} from "../../core/InputBase";
import wrapper from "../../utils/wrapper";
import { IconType } from "react-icons";

export const EInputColors = EInputBaseColors;
export type EInputColors = EInputBaseColors;

export const EInputVariants = EInputBaseVariants;
export type EInputVariants = EInputBaseVariants;

export interface IInputOwnProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color"> {
  className?: string;
  color?: EInputColors;
  disabled?: boolean;
  helperText?: string;
  IconEnd?: IconType;
  IconStart?: IconType;
  isFetching?: boolean;
  label?: string;
  variant?: EInputVariants;
}

export type TInputRef = HTMLDivElement;

const Input = wrapper<TInputRef, IInputOwnProps>(
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
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
      <InputBase
        ref={ref}
        IconStart={IconStart}
        IconEnd={IconEnd}
        variant={variant}
        disabled={disabled}
        helperText={helperText}
        label={label}
        color={color}
        isFetching={isFetching}
        isFocused={isFocused}
        className={className}
      >
        <input
          {...inputProps}
          className={classNames(styles.input, disabled && styles.disabled)}
          disabled={disabled}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setIsFocused(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setIsFocused(false);
          }}
        />
      </InputBase>
    );
  }
);

Input.defaultProps = {
  color: EInputColors.PRIMARY,
  disabled: false,
  variant: EInputVariants.FILLED,
};

export type IInputProps = React.ComponentProps<typeof Input>;

export default Input;
