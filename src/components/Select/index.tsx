import React, {
  cloneElement,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import classNames from "classnames";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { isEmpty } from "lodash";
import { useClickAway } from "react-use";

import {
  GoX as CancelIcon,
  GoChevronDown as ExpandMoreIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import InputBase, {
  EInputBaseColors,
  EInputBaseVariants,
  InputBaseRef,
} from "../../core/InputBase";
import wrapper from "../../utils/wrapper";
import Chip, { EChipColors, EChipSizes, EChipVariants } from "../Chip";
import CircularProgress from "../CircularProgress";
import List from "../List";
import ListItem, { IListItemProps } from "../ListItem";
import Popper, { EPopperPosition } from "../Popper";

export const ESelectColors = EInputBaseColors;
export type ESelectColors = EInputBaseColors;

export const ESelectVariants = EInputBaseVariants;
export type ESelectVariants = EInputBaseVariants;

export enum ESelectMultipleVariant {
  DEFAULT = "default",
  CHIP = "chip",
}

export type TValue = string | number;

export type TOption = {
  label: React.ReactNode;
  value: TValue;
};

export interface ISelectOwnProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "color" | "onChange" | "value"
  > {
  className?: string;
  color?: ESelectColors;
  disabled?: boolean;
  emptyListText?: string;
  helperText?: string;
  isFetching?: boolean;
  isLoading?: boolean;
  label?: string;
  multiple?: boolean;
  multiplePlaceholder?: string;
  multipleVariant?: ESelectMultipleVariant;
  onChange?: (value?: TValue | TValue[]) => void;
  onClear?: () => void;
  onSearchChange?: (value: string) => void;
  options: TOption[];
  placeholder?: string;
  popperClassName?: string;
  renderValue?: (value: TOption | TOption[]) => string;
  searchValue?: string;
  value?: TValue | TValue[];
  variant?: ESelectVariants;
}

export type TSelectRef = HTMLDivElement;

const Select = wrapper<TSelectRef, ISelectOwnProps>(
  (
    {
      className,
      color,
      disabled,
      emptyListText,
      helperText,
      isFetching,
      isLoading,
      label,
      multiple,
      multiplePlaceholder,
      multipleVariant,
      onChange,
      onClear,
      onSearchChange,
      options,
      placeholder,
      popperClassName,
      renderValue,
      searchValue,
      value,
      variant,
      ...inputProps
    },
    ref
  ) => {
    const isMultiple = multiple && Array.isArray(value);

    const containerRef = useRef<InputBaseRef>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const popperRef = useRef<HTMLDivElement>(null);
    const initialOptions = useRef<typeof options>(options);

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState(
      isMultiple ? (value as TValue[])?.length : 0
    );
    const [currentOption, setCurrentOption] = useState<
      TOption | TOption[] | undefined
    >(undefined);

    const countControls = useAnimationControls();
    const isSearchable = !!onSearchChange;
    const isClearable =
      (isMultiple ? (currentOption as TOption[])?.length : currentOption) &&
      onClear &&
      !disabled;

    useImperativeHandle(ref, () => containerRef.current as TSelectRef);

    useEffect(() => {
      if (isMultiple) {
        if (isSearchable) {
          const newCurrentOptions = initialOptions.current.filter((option) =>
            (value as TValue[])?.includes(option.value)
          );

          if (newCurrentOptions.length > 0) {
            setCurrentOption(newCurrentOptions);
          }
        } else {
          const newCurrentOptions = options.filter((option) =>
            (value as TValue[])?.includes(option.value)
          );
          setCurrentOption(newCurrentOptions);
        }
      } else {
        if (isSearchable) {
          const newCurrentOption = options.find(
            (option) => option.value === value
          );

          if (newCurrentOption) {
            setCurrentOption(newCurrentOption);
          }
        } else {
          setCurrentOption(options.find((o) => o.value === value));
        }
      }
    }, [isMultiple, options, value, isSearchable]);

    const inputValue: string = (() => {
      if (typeof searchValue === "string" && isEmpty(currentOption)) {
        return searchValue || "";
      } else if (currentOption) {
        return renderValue
          ? renderValue(currentOption)
          : (currentOption as TOption)?.label?.toString() || "";
      } else {
        return "";
      }
    })();

    const setIsPopperOpen = useCallback(
      (isOpen: boolean) => {
        if (disabled) {
          setIsOpen(false);
        } else {
          setIsOpen(isOpen);
        }
      },
      [disabled]
    );

    useEffect(() => {
      if (disabled) {
        setIsPopperOpen(false);
      }
    }, [disabled, setIsPopperOpen]);

    useEffect(() => {
      if (isOpen) {
        setIsFocused(true);
        inputRef.current?.focus();
      } else {
        setIsFocused(false);
        inputRef.current?.blur();
      }
    }, [isOpen, setIsFocused]);

    useClickAway(popperRef, (e) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsPopperOpen(false);
      }
    });

    const onClickClear = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
      event.stopPropagation();
      setCurrentOption(undefined);
      onClear?.();
    };

    const onClickOption = (clickedOption: TOption) => (e: React.MouseEvent) => {
      if (isMultiple) {
        e.stopPropagation();

        const currentValues = (currentOption as TOption[])?.map(
          ({ value }) => value
        );
        const isSelected = currentValues?.some(
          (v) => v === clickedOption.value
        );

        const newValue = isSelected
          ? currentValues?.filter((v) => v !== clickedOption.value)
          : [...currentValues, clickedOption.value];

        onChange?.(newValue);
        onSearchChange?.("");
        inputRef.current?.focus();
      } else {
        onChange?.(clickedOption.value);
        onSearchChange?.("");
        setIsPopperOpen(false);
      }
    };

    const renderActions = () => {
      return (
        <motion.span
          animate={isClearable ? "selected" : "empty"}
          className={styles.actions}
          initial="empty"
          variants={{
            selected: {
              marginRight: "0px",
              transition: { duration: 0.2, delay: 0 },
            },
            empty: {
              marginRight: "-24px",
              transition: { duration: 0.2, delay: 0 },
            },
          }}
        >
          {isLoading && <CircularProgress className={styles.loader} />}
          <motion.span
            animate={isOpen ? "open" : "closed"}
            className={styles.expandIcon}
            variants={{
              open: {
                rotate: 180,
              },
              closed: {
                rotate: 0,
              },
            }}
          >
            <ExpandMoreIcon size={20} />
          </motion.span>
          <motion.span
            className={styles.clearIcon}
            variants={{
              selected: {
                visibility: "visible",
                opacity: 1,
                rotate: -90,
                transition: { duration: 0.1, delay: 0.1 },
              },
              empty: {
                visibility: "hidden",
                opacity: 0,
                rotate: 0,
                transition: { duration: 0.1, delay: 0 },
              },
            }}
          >
            <CancelIcon size={20} onClick={onClickClear} />
          </motion.span>
        </motion.span>
      );
    };

    const renderOption = (option: TOption) => {
      const isSelected = isMultiple
        ? (currentOption as TOption[])?.some(
            (selectedValue) => selectedValue.value === option.value
          )
        : (currentOption as TOption)?.value === option.value;

      const listItemProps: IListItemProps = {
        onClick: onClickOption(option),
        selected: isSelected,
      };

      if (React.isValidElement(option.label)) {
        return cloneElement(option.label as JSX.Element, {
          ...listItemProps,
        });
      } else {
        return (
          <ListItem key={`${option.label}_${option.value}`} {...listItemProps}>
            {option.label}
          </ListItem>
        );
      }
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isMultiple) {
        onSearchChange?.(event.target.value);
      } else {
        onSearchChange?.(event.target.value);
        setCurrentOption(undefined);
        onChange?.(undefined);
      }
    };

    const renderEmptyList = () => (
      <ListItem disabled className={styles.emptyListItem}>
        {emptyListText}
      </ListItem>
    );

    const renderChips = () =>
      (currentOption as TOption[])?.map((option) => (
        <Chip
          key={`chip_${option.label}_${option.value}`}
          label={option.label}
          onDelete={onClickOption(option)}
          variant={EChipVariants.FILLED}
          color={EChipColors.PRIMARY}
          size={EChipSizes.SMALL}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      ));

    const animateCount = useCallback(
      async (direction: -1 | 1) => {
        await countControls.start({ y: 0, opacity: 1 });
        await countControls.start({ y: direction * -10, opacity: 0 });
        await countControls.start({ y: direction * 10, opacity: 0 });
        return await countControls.start({ y: 0, opacity: 1 });
      },
      [countControls]
    );

    useEffect(() => {
      if (isMultiple) {
        const length = (currentOption as TOption[])?.length || 0;

        if (length > count) {
          animateCount(1);
          setTimeout(() => {
            setCount(length || 0);
          }, 300);
        } else if (length < count) {
          animateCount(-1);
          setTimeout(() => {
            setCount(length || 0);
          }, 300);
        }
      }
    }, [currentOption, isMultiple, count, animateCount]);

    const renderCount = () => {
      return (
        <motion.span
          animate={countControls}
          transition={{
            duration: 0.1,
          }}
        >
          {count}
        </motion.span>
      );
    };

    const renderChipPlaceholder = () => (
      <Chip
        className={styles.chipPlaceholder}
        label={
          <Fragment>
            <span className={styles.multiplePlaceholder}>
              {multiplePlaceholder}
            </span>
            {renderCount()}
          </Fragment>
        }
        variant={EChipVariants.FILLED}
        color={EChipColors.SECONDARY}
        size={EChipSizes.SMALL}
      />
    );

    const renderInput = () => {
      const isValueEmpty = isMultiple
        ? (currentOption as TOption[])?.length === 0
        : !currentOption;

      return isSearchable || (isValueEmpty && placeholder) || currentOption ? (
        <input
          ref={inputRef}
          className={classNames(styles.input, disabled && styles.disabled)}
          disabled={!(isSearchable && !disabled)}
          value={inputValue}
          onChange={onInputChange}
          placeholder={isValueEmpty || isSearchable ? placeholder : ""}
          {...inputProps}
        />
      ) : null;
    };

    return (
      <Fragment>
        <InputBase
          ref={containerRef}
          variant={variant}
          disabled={disabled}
          helperText={helperText}
          label={label}
          color={color}
          isFetching={isFetching}
          isFocused={isFocused}
          // THINK: maybe compare with e.target
          onClick={() => setIsPopperOpen(!isOpen)}
          className={classNames(styles.container, className)}
        >
          {isMultiple ? (
            <div className={styles.multiple}>
              <AnimatePresence>
                {multipleVariant === ESelectMultipleVariant.CHIP &&
                  renderChips()}
              </AnimatePresence>
              {multipleVariant === ESelectMultipleVariant.DEFAULT &&
                renderChipPlaceholder()}
              {renderInput()}
            </div>
          ) : (
            renderInput()
          )}
          {renderActions()}
        </InputBase>
        <Popper
          ref={popperRef}
          open={isOpen}
          anchorEl={containerRef.current}
          position={EPopperPosition.BOTTOM}
          className={classNames(styles.popper, popperClassName)}
          fullWidth
        >
          <List>
            {options?.length ? options.map(renderOption) : renderEmptyList()}
          </List>
        </Popper>
      </Fragment>
    );
  }
);

Select.defaultProps = {
  color: ESelectColors.PRIMARY,
  disabled: false,
  variant: ESelectVariants.FILLED,
  emptyListText: "No options",
  multiplePlaceholder: "Selected:",
};

export interface ISelectProps extends React.ComponentProps<typeof Select> {}

export default Select;
