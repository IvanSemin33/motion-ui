import { useEffect, useMemo, useRef } from "react";

import classNames from "classnames";

import { GoCheck as CheckIcon, GoDash as RemoveIcon } from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";

export enum ECheckboxVariants {
  FILLED = "filled",
  OUTLINED = "outlined",
}

export enum ECheckboxSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
export interface ICheckboxOwnProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
  size?: ECheckboxSizes;
  variant?: ECheckboxVariants;
  isFetching?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export type TCheckboxRef = HTMLLabelElement;

const Checkbox = wrapper<TCheckboxRef, ICheckboxOwnProps>(
  (
    {
      variant,
      checked,
      indeterminate,
      disabled,
      size,
      label,
      isFetching,
      className,
      ...inputProps
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        if (checked) {
          inputRef.current.checked = true;
          inputRef.current.indeterminate = false;
        } else if (!checked && indeterminate) {
          inputRef.current.checked = false;
          inputRef.current.indeterminate = true;
        } else {
          inputRef.current.checked = false;
          inputRef.current.indeterminate = false;
        }
      }
    }, [checked, indeterminate]);

    const isTerminated = useMemo(
      () => !checked && indeterminate,
      [checked, indeterminate]
    );

    return (
      <label
        ref={ref}
        className={classNames(
          styles.container,
          size && styles[size],
          variant && styles[variant],
          disabled && styles.disabled,
          checked && styles.checked,
          isTerminated && styles.indeterminate,
          isFetching && styles.isFetching,
          className
        )}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="checkbox"
          disabled={disabled}
          {...inputProps}
        />
        <span className={styles.checkmark}>
          {checked ? <CheckIcon /> : isTerminated ? <RemoveIcon /> : null}
        </span>
        {label && <div className={styles.label}>{label}</div>}
      </label>
    );
  }
);

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: ECheckboxSizes.MEDIUM,
  variant: ECheckboxVariants.FILLED,
};

export interface ICheckboxProps extends React.ComponentProps<typeof Checkbox> {}

export default Checkbox;
