import { Dispatch, Fragment, SetStateAction, useRef, useState } from "react";

import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import { Range } from "react-date-range";
import InputMask from "react-input-mask";
import { useClickAway } from "react-use";

import {
  GoChevronRight as ArrowRightAltIcon,
  GoCalendar as CalendarIcon,
} from "react-icons/go";

import "./calendar.scss";
import styles from "./index.module.scss";

import Popper, { EPopperPosition } from "../../components/Popper";

export enum EDatePickerBaseVariants {
  OUTLINED = "outlined",
  FILLED = "filled",
  STANDARD = "standard",
}

export enum EDatePickerBaseLabelPlacements {
  TOP = "top",
  LEFT = "left",
}

export enum EDatePickerBaseTypes {
  SINGLE = "single",
  RANGE = "range",
  STATIC_RANGE = "static-range",
}

export interface IDatePickerBaseOwnProps
  extends Omit<HTMLMotionProps<"div">, "onChange"> {
  className?: string;
  disabled?: boolean;
  label?: string;
  labelPlacement?: EDatePickerBaseLabelPlacements;
  onChange: (value: Range[] | Date) => void;
  value: Range[] | Date;
  variant?: EDatePickerBaseVariants;
  isFetching?: boolean;

  // Inner props
  calendar: JSX.Element;
  endDateInputValue?: string;
  setEndDateInputValue?: Dispatch<SetStateAction<string>>;
  setStartDateInputValue: Dispatch<SetStateAction<string>>;
  startDateInputValue: string;
  type: EDatePickerBaseTypes;
}

const DatePickerBase = ({
  onChange,
  value,
  className,
  variant,
  disabled,
  labelPlacement,
  label,
  type,
  startDateInputValue,
  setStartDateInputValue,
  calendar,
  setEndDateInputValue,
  isFetching,
  endDateInputValue,
  ...containerProps
}: IDatePickerBaseOwnProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useClickAway(calendarRef, (event) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node) &&
      !pickerRef?.current?.contains(event.target as Node)
    ) {
      setIsCalendarOpen(false);
    }
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = event.target;

    if (name === "startDate") {
      setStartDateInputValue(inputValue);
    }

    if (name === "endDate" && setEndDateInputValue) {
      setEndDateInputValue(inputValue);
    }

    const pattern =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    const isValid = pattern.test(inputValue);

    if (isValid) {
      const date = new Date(
        inputValue.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1")
      );
      onChange(
        type === EDatePickerBaseTypes.RANGE
          ? [
              {
                startDate:
                  name === "startDate" ? date : (value as Range[])[0].startDate,
                endDate:
                  name === "endDate" ? date : (value as Range[])[0].endDate,
                key: "selection",
              },
            ]
          : date
      );
    }
  };

  const toggleCalendar = (isOpen: boolean) => {
    if (!disabled) {
      setIsCalendarOpen(isOpen);
    }
  };

  return (
    <motion.div
      className={classNames(
        styles.container,
        variant && styles[variant],
        disabled && styles.disabled,
        isFetching && styles.isFetching,
        className
      )}
      {...containerProps}
    >
      <div ref={pickerRef} className={styles.picker}>
        {label && (
          <div
            className={
              labelPlacement === EDatePickerBaseLabelPlacements.LEFT
                ? styles.labelLeft
                : styles.labelTop
            }
          >
            {label}
          </div>
        )}
        <div className={styles.dateInputs}>
          <InputMask
            mask="99.99.9999"
            name="startDate"
            className={styles.input}
            value={startDateInputValue}
            disabled={disabled}
            onChange={onChangeInput}
            maskPlaceholder="dd.mm.yyyy"
            onFocus={() => toggleCalendar(true)}
          />
          {type === EDatePickerBaseTypes.RANGE && (
            <Fragment>
              <ArrowRightAltIcon size={16} />
              <InputMask
                mask="99.99.9999"
                name="endDate"
                className={styles.input}
                value={endDateInputValue}
                disabled={disabled}
                onChange={onChangeInput}
                maskPlaceholder="dd.mm.yyyy"
                onFocus={() => toggleCalendar(true)}
              />
            </Fragment>
          )}
          <CalendarIcon
            size={16}
            className={styles.iconButton}
            onMouseEnter={() => toggleCalendar(true)}
          />
        </div>
      </div>
      <Popper
        ref={calendarRef}
        anchorEl={pickerRef.current}
        className={styles.calendarWrapper}
        open={isCalendarOpen}
        position={EPopperPosition.BOTTOM}
      >
        {calendar}
      </Popper>
    </motion.div>
  );
};

DatePickerBase.defaultProps = {
  labelPlacement: EDatePickerBaseLabelPlacements.TOP,
  disabled: false,
  variant: EDatePickerBaseVariants.STANDARD,
};

export interface IDatePickerBaseProps
  extends React.ComponentProps<typeof DatePickerBase> {}

export default DatePickerBase;
