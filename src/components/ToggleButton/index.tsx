import ButtonBase, {
  EButtonBaseColors,
  EButtonBaseSizes,
  EButtonBaseTypes,
  EButtonBaseVariants,
  IButtonBaseOwnProps,
} from '../../core/ButtonBase'
import wrapper from '../../utils/wrapper'

export const EToggleButtonColors = EButtonBaseColors
export type EToggleButtonColors = EButtonBaseColors

export const EToggleButtonVariants = EButtonBaseVariants
export type EToggleButtonVariants = EButtonBaseVariants

export const EToggleButtonSizes = EButtonBaseSizes
export type EToggleButtonSizes = EButtonBaseSizes

export interface IToggleButtonOwnProps extends Omit<IButtonBaseOwnProps, 'buttonType'> {
  value: string
  selected?: boolean
}

export type TToggleButtonRef = HTMLButtonElement

const ToggleButton = wrapper<TToggleButtonRef, IToggleButtonOwnProps>(
  ({ selected, Icon, ...baseProps }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        {...baseProps}
        buttonType={Icon ? EButtonBaseTypes.ICON : EButtonBaseTypes.DEFAULT}
        Icon={Icon}
        selected={selected}
        toggleButton
      />
    )
  }
)

ToggleButton.defaultProps = {
  color: EToggleButtonColors.PRIMARY,
  disabled: false,
  isFetching: false,
  loading: false,
  size: EToggleButtonSizes.MEDIUM,
  variant: EToggleButtonVariants.CONTAINED,
}

export interface IToggleButtonProps extends React.ComponentProps<typeof ToggleButton> {}

export default ToggleButton
