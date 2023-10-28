import ButtonBase, {
  EButtonBaseColors,
  EButtonBaseSizes,
  EButtonBaseTypes,
  EButtonBaseVariants,
  IButtonBaseOwnProps,
} from '../../core/ButtonBase'
import wrapper from '../../utils/wrapper'

export const EButtonColors = EButtonBaseColors
export type EButtonColors = EButtonBaseColors

export const EButtonVariants = EButtonBaseVariants
export type EButtonVariants = EButtonBaseVariants

export const EButtonSizes = EButtonBaseSizes
export type EButtonSizes = EButtonBaseSizes

export interface IButtonOwnProps extends Omit<IButtonBaseOwnProps, 'Icon, buttonType, children'> {
  children: React.ReactNode
}

export type TButtonRef = HTMLButtonElement

const Button = wrapper<TButtonRef, IButtonOwnProps>((props, ref) => {
  return <ButtonBase ref={ref} {...props} buttonType={EButtonBaseTypes.DEFAULT} />
})

Button.defaultProps = {
  color: EButtonColors.PRIMARY,
  disabled: false,
  size: EButtonSizes.MEDIUM,
  variant: EButtonVariants.CONTAINED,
}

export interface IButtonProps extends React.ComponentProps<typeof Button> {}

export default Button
