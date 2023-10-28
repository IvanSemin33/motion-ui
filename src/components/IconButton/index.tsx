import { IconType } from "react-icons";
import ButtonBase, {
  EButtonBaseColors,
  EButtonBaseSizes,
  EButtonBaseTypes,
  EButtonBaseVariants,
  IButtonBaseOwnProps,
  TButtonBaseRef,
} from "../../core/ButtonBase";
import wrapper from "../../utils/wrapper";

export const EIconButtonColors = EButtonBaseColors;
export type EIconButtonColors = EButtonBaseColors;

export const EIconButtonVariants = EButtonBaseVariants;
export type EIconButtonVariants = EButtonBaseVariants;

export const EIconButtonSizes = EButtonBaseSizes;
export type EIconButtonSizes = EButtonBaseSizes;

export interface IIconButtonOwnProps
  extends Omit<
    IButtonBaseOwnProps,
    "Icon, buttonType, IconEnd, IconStart, children"
  > {
  Icon: IconType;
}

export type TIconButtonRef = TButtonBaseRef;

const IconButton = wrapper<TIconButtonRef, IIconButtonOwnProps>(
  (props, ref) => {
    return (
      <ButtonBase ref={ref} {...props} buttonType={EButtonBaseTypes.ICON} />
    );
  }
);

IconButton.defaultProps = {
  color: EIconButtonColors.PRIMARY,
  disabled: false,
  size: EIconButtonSizes.MEDIUM,
  variant: EIconButtonVariants.CONTAINED,
};

export interface IIconButtonProps
  extends React.ComponentProps<typeof IconButton> {}

export default IconButton;
