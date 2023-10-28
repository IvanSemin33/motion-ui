import { HTMLAttributes, useMemo } from "react";

import classNames from "classnames";
import { useRanger } from "react-ranger";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";

export type TSliderValues = number[];

export interface ISliderOwnProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  disabled?: boolean;
  isFetching?: boolean;
  max: number;
  min: number;
  onChange?: (value: TSliderValues) => void;
  stepSize?: number;
  values: TSliderValues;
}

export type TSliderRef = HTMLDivElement;

const Slider = wrapper<TSliderRef, ISliderOwnProps>(
  (
    {
      disabled,
      max,
      min,
      onChange,
      values,
      stepSize,
      className,
      isFetching,
      ...containerProps
    },
    ref
  ) => {
    const onChangeHandler = (values: number[]) => {
      if (onChange && !disabled) {
        onChange(values);
      }
    };

    const { getTrackProps, handles, activeHandleIndex } = useRanger({
      values,
      onDrag: onChangeHandler,
      min,
      max,
      stepSize: stepSize || 1,
    });

    const isDragging = activeHandleIndex !== null;
    const isRange = values.length > 1;

    const sliderBackground = useMemo(() => {
      const trackColor = disabled ? "#A3A3A3" : "#06C1A6";

      const percent = (value: number) => ((value - min) / (max - min)) * 100;

      if (isRange) {
        return `linear-gradient(to right, #ECECEC 0%, #ECECEC ${percent(
          values[0]
        )}%, ${trackColor} ${percent(values[0])}%, ${trackColor} ${percent(
          values[1]
        )}%, #ECECEC ${percent(values[1])}%, #ECECEC 100%)`;
      } else {
        return `linear-gradient(to right, ${trackColor} 0%, ${trackColor} ${percent(
          values[0]
        )}%, #ECECEC ${percent(values[0])}%, #ECECEC 100%)`;
      }
    }, [values, isRange, disabled, min, max]);

    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          disabled && styles.disabled,
          isDragging && styles.dragging,
          isFetching && styles.isFetching,
          className
        )}
        {...containerProps}
      >
        <div
          {...getTrackProps({
            className: styles.slider,
            style: {
              background: sliderBackground,
            },
          })}
        >
          {handles?.map(({ getHandleProps, active }) => {
            return (
              <div
                {...getHandleProps({
                  className: classNames(styles.handle, active && styles.active),
                })}
              />
            );
          })}
        </div>
        <div className={styles.labels}>
          <span className={styles.min}>{min}</span>
          <span className={styles.max}>{max}</span>
        </div>
      </div>
    );
  }
);

Slider.defaultProps = {
  disabled: false,
  stepSize: 1,
  min: 0,
  max: 100,
};

export interface ISliderProps extends React.ComponentProps<typeof Slider> {}

export default Slider;
