import { useCallback, useMemo, useState } from 'react'

import { format, Locale } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { camelCase } from 'lodash'
import {
  DateRange as DateRangeComponent,
  DateRangePicker as DateRangePickerComponent,
  DateRangePickerProps as DateRangePickerComponentProps,
  defaultStaticRanges,
  Range,
} from 'react-date-range'

import DatePickerBase, {
  EDatePickerBaseLabelPlacements,
  EDatePickerBaseTypes,
  EDatePickerBaseVariants,
  IDatePickerBaseProps,
} from '../../core/DatePickerBase'
import wrapper from '../../utils/wrapper'

export const EDateRangePickerLabelPlacements = EDatePickerBaseLabelPlacements
export type EDateRangePickerLabelPlacements = EDatePickerBaseLabelPlacements

export const EDateRangePickerVariants = EDatePickerBaseVariants
export type EDateRangePickerVariants = EDatePickerBaseVariants

type TStaticRangesLabels = {
  today: string
  yesterday: string
  thisWeek: string
  lastWeek: string
  thisMonth: string
  lastMonth: string
}

export interface IDateRangePickerOwnProps
  extends Omit<
    IDatePickerBaseProps,
    | 'onChange'
    | 'value'
    | 'type'
    | 'calendar'
    | 'setStartDateInputValue'
    | 'setEndDateInputValue'
    | 'startDateInputValue'
    | 'endDateInputValue'
  > {
  onChange: (value: Range[]) => void
  value: Range[]
  staticRanges?: boolean
  staticRangesLabels?: TStaticRangesLabels
  labelPlacement?: EDateRangePickerLabelPlacements
  variant?: EDateRangePickerVariants
  locale?: Locale
}

export type TDateRangePickerRef = HTMLDivElement

const DateRangePicker = wrapper<TDateRangePickerRef, IDateRangePickerOwnProps>(
  ({ staticRanges, staticRangesLabels, onChange, value, locale, ...calendarProps }) => {
    const [startDateInputValue, setStartDateInputValue] = useState<string>(
      value[0].startDate ? format(value[0].startDate, 'dd.MM.yyyy') : ''
    )

    const [endDateInputValue, setEndDateInputValue] = useState<string>(
      value[0].endDate ? format(value[0].endDate, 'dd.MM.yyyy') : ''
    )

    const customStaticRanges = useMemo(
      () =>
        staticRanges
          ? defaultStaticRanges.map((range) => {
              if (
                staticRangesLabels &&
                range.label &&
                camelCase(range.label) in staticRangesLabels
              ) {
                return {
                  ...range,
                  label: staticRangesLabels[camelCase(range.label) as keyof TStaticRangesLabels],
                }
              }
              return range
            })
          : [],
      [staticRanges, staticRangesLabels]
    )

    const onChangeRangeCalendar = useCallback(
      (ranges: Range[]) => {
        onChange(ranges)
        setStartDateInputValue(ranges[0].startDate ? format(ranges[0].startDate, 'dd.MM.yyyy') : '')
        setEndDateInputValue(ranges[0].endDate ? format(ranges[0].endDate, 'dd.MM.yyyy') : '')
      },
      [onChange]
    )

    const reactDateRangeProps = useMemo(() => {
      return {
        showDateDisplay: false,
        locale,
        weekdayDisplayFormat: 'EEEEEE',
        onChange: (item) => onChangeRangeCalendar([item.selection]),
        ranges: value.length
          ? value
          : [
              {
                startDate: new Date(),
                endDate: undefined,
                key: 'selection',
              },
            ],
        staticRanges: customStaticRanges,
        inputRanges: [],
      } as DateRangePickerComponentProps
    }, [value, locale, customStaticRanges, onChangeRangeCalendar])

    return (
      <DatePickerBase
        {...calendarProps}
        type={EDatePickerBaseTypes.RANGE}
        calendar={
          staticRanges ? (
            <DateRangePickerComponent {...reactDateRangeProps} />
          ) : (
            <DateRangeComponent {...reactDateRangeProps} />
          )
        }
        setStartDateInputValue={setStartDateInputValue}
        startDateInputValue={startDateInputValue}
        setEndDateInputValue={setEndDateInputValue}
        endDateInputValue={endDateInputValue}
        onChange={(value) => onChange(value as Range[])}
        value={value}
      />
    )
  }
)

DateRangePicker.defaultProps = {
  staticRanges: false,
  locale: enGB,
}

export interface IDateRangePickerProps extends React.ComponentProps<typeof DateRangePicker> {}

export default DateRangePicker
