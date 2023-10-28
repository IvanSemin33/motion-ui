import { useCallback, useMemo, useState } from 'react'

import { format, Locale } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar, CalendarProps } from 'react-date-range'

import DatePickerBase, {
  EDatePickerBaseLabelPlacements,
  EDatePickerBaseTypes,
  EDatePickerBaseVariants,
  IDatePickerBaseProps,
} from '../../core/DatePickerBase'
import wrapper from '../../utils/wrapper'

export const EDatePickerLabelPlacements = EDatePickerBaseLabelPlacements
export type EDatePickerLabelPlacements = EDatePickerBaseLabelPlacements

export const EDatePickerVariants = EDatePickerBaseVariants
export type EDatePickerVariants = EDatePickerBaseVariants

interface IDatePickerOwnProps
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
  onChange: (value: Date) => void
  value: Date
  labelPlacement?: EDatePickerLabelPlacements
  variant?: EDatePickerVariants
  locale?: Locale
}

export type TDatePickerRef = HTMLDivElement

const DatePicker = wrapper<TDatePickerRef, IDatePickerOwnProps>(
  ({ value, locale, onChange, ...calendarProps }) => {
    const [startDateInputValue, setStartDateInputValue] = useState<string>(
      format(value, 'dd.MM.yyyy')
    )

    const onChangeCalendar = useCallback(
      (date: Date) => {
        onChange(date)
        setStartDateInputValue(format(date, 'dd.MM.yyyy'))
      },
      [onChange, setStartDateInputValue]
    )

    const reactDateRangeProps: CalendarProps = useMemo(() => {
      return {
        showDateDisplay: false,
        weekdayDisplayFormat: 'EEEEEE',
        locale: locale,
        onChange: (item) => onChangeCalendar(item),
        date: value,
      }
    }, [value, locale, onChangeCalendar])

    return (
      <DatePickerBase
        {...calendarProps}
        type={EDatePickerBaseTypes.SINGLE}
        calendar={<Calendar {...reactDateRangeProps} />}
        setStartDateInputValue={setStartDateInputValue}
        startDateInputValue={startDateInputValue}
        onChange={(value) => onChange(value as Date)}
        value={value}
      />
    )
  }
)

DatePicker.defaultProps = {
  locale: enGB,
}

export interface IDatePickerProps extends React.ComponentProps<typeof DatePicker> {}

export default DatePicker
