import { forwardRef, Fragment } from "react";

import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";

import styles from "./index.module.scss";

import CircularProgress, {
  ECircularProgressSize,
  ICircularProgressProps,
} from "../../components/CircularProgress";
import { isDark, transformColor } from "../../utils/color";
import { IconType } from "react-icons";

export enum EButtonBaseTypes {
  DEFAULT = "default",
  ICON = "icon",
}

export enum EButtonBaseColors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ERROR = "error",
}

export enum EButtonBaseVariants {
  DEFAULT = "default",
  CONTAINED = "contained",
  OUTLINED = "outlined",
  LINK = "link",
}

export enum EButtonBaseSizes {
  XSMALL = "xsmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XLARGE = "xlarge",
}

// TODO: Add description to all components
export interface IButtonBaseOwnProps extends HTMLMotionProps<"button"> {
  /**
   * 👶 The content of the button.
   * @type {React.ReactNode}
   * @example
   * <ButtonBase>Button</ButtonBase>
   */
  children?: React.ReactNode;

  /**
   * 🎨 The color of the button.
   * @type {EButtonBaseColors}
   * @default EButtonBaseColors.PRIMARY
   * @example
   * <ButtonBase color={EButtonBaseColors.PRIMARY} />
   **/
  color?: EButtonBaseColors;

  /**
   * 🎨 The custom color of the button.
   * @type {string}
   * @example
   * <ButtonBase customColor="#FF0000" />
   *
   **/
  customColor?: string;

  /**
   * 🚫 If `true`, the button will be disabled.
   * @type {boolean}
   * @default false
   * @example
   * <ButtonBase disabled />
   */
  disabled?: boolean;

  /**
   * 🔗 The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   * @type {string}
   * @example
   * <ButtonBase href="https://www.ivan-semin.com" />
   */
  href?: string;

  /**
   * ⚛️ The icon element.
   * @type {IconType}
   * @example
   * <ButtonBase Icon={Icon} />
   */
  Icon?: IconType;

  /**
   * ⚛️ The icon element at the end of the button.
   * @type {IconType}
   * @example
   * <ButtonBase IconEnd={Icon} />
   */
  IconEnd?: IconType;

  /**
   * ⚛️ The icon element at the start of the button.
   * @type {IconType}
   * @example
   * <ButtonBase IconStart={Icon} />
   */
  IconStart?: IconType;

  /**
   * 🔄 If `true`, the skeleton will be shown.
   * @type {boolean}
   * @default false
   * @example
   * <ButtonBase isFetching />
   */
  isFetching?: boolean;

  /**
   * ☑️ If true, the button will be a toggle button.
   * @type {boolean}
   * @default false
   * @example
   * <ButtonBase toggleButton />
   * */
  toggleButton?: boolean;

  /**
   * ☑️ Select state of the button.
   * @type {boolean}
   * @default false
   * @example
   * <ButtonBase toggleButton selected />
   * */
  selected?: boolean;

  /**
   * 📏 The size of the button.
   * @type {EButtonBaseSizes}
   * @default EButtonBaseSizes.MEDIUM
   * @example
   * <ButtonBase size={EButtonBaseSizes.SMALL} />
   **/
  size?: EButtonBaseSizes;

  /**
   * 📏 The type of the button.
   * @type {EButtonBaseTypes}
   * @default EButtonBaseTypes.DEFAULT
   * @example
   * <ButtonBase buttonType={EButtonBaseTypes.DEFAULT} />
   **/
  buttonType?: EButtonBaseTypes;

  /**
   * 🔄 If `true`, the button will show a loading indicator.
   * @type {boolean}
   * @default false
   * @example
   * <ButtonBase loading />
   **/
  loading?: boolean;

  /**
   * 🌈 The variant of the button.
   * @type {EButtonBaseVariants}
   * @default EButtonBaseVariants.DEFAULT
   * @example
   * <ButtonBase variant={EButtonBaseVariants.DEFAULT} />
   **/
  variant?: EButtonBaseVariants;
}

export type TButtonBaseRef = HTMLButtonElement;

const ButtonBase = forwardRef<TButtonBaseRef, IButtonBaseOwnProps>(
  (
    {
      toggleButton,
      buttonType,
      children,
      className,
      color,
      customColor,
      disabled,
      Icon,
      IconEnd,
      IconStart,
      isFetching,
      loading,
      selected,
      size,
      variant,
      ...buttonProps
    },
    ref
  ) => {
    const getCustomColor = () => {
      if (customColor) {
        const text = isDark(customColor) ? "#FFFFFF" : "#23262D";

        switch (variant) {
          case EButtonBaseVariants.DEFAULT:
            return {
              "--custom-color-light-default": customColor,
              "--custom-color-light-hover": transformColor(customColor, 0.7),
              "--custom-color-light-active": transformColor(customColor, 0.6),
              "--custom-color-light-text": customColor,
              "--custom-color-light-loading": transformColor(customColor, 0.1),
              "--custom-color-dark-default": customColor,
              "--custom-color-dark-hover": transformColor(customColor, -0.6),
              "--custom-color-dark-active": transformColor(customColor, -0.7),
              "--custom-color-dark-text": customColor,
              "--custom-color-dark-loading": transformColor(customColor, -0.1),
            };
          case EButtonBaseVariants.CONTAINED:
            return {
              "--custom-color-light-default": customColor,
              "--custom-color-light-hover": transformColor(customColor, -0.1),
              "--custom-color-light-active": transformColor(customColor, -0.2),
              "--custom-color-light-text": text,
              "--custom-color-light-loading": transformColor(customColor, 0.2),
              "--custom-color-dark-default": customColor,
              "--custom-color-dark-hover": transformColor(customColor, 0.1),
              "--custom-color-dark-active": transformColor(customColor, -0.1),
              "--custom-color-dark-text": text,
              "--custom-color-dark-loading": transformColor(customColor, 0.2),
            };
          case EButtonBaseVariants.OUTLINED:
            return {
              "--custom-color-light-default": customColor,
              "--custom-color-light-hover": transformColor(customColor, 0.8),
              "--custom-color-light-active": transformColor(customColor, 0.6),
              "--custom-color-light-text": customColor,
              "--custom-color-light-loading": transformColor(customColor, 0.1),
              "--custom-color-dark-default": customColor,
              "--custom-color-dark-hover": transformColor(customColor, -0.5),
              "--custom-color-dark-active": transformColor(customColor, -0.7),
              "--custom-color-dark-text": customColor,
              "--custom-color-dark-loading": transformColor(customColor, -0.1),
            };
          case EButtonBaseVariants.LINK:
            return {
              "--custom-color-light-default": customColor,
              "--custom-color-light-hover": transformColor(customColor, -0.1),
              "--custom-color-light-active": transformColor(customColor, -0.2),
              "--custom-color-light-text": customColor,
              "--custom-color-dark-default": customColor,
              "--custom-color-dark-hover": transformColor(customColor, 0.1),
              "--custom-color-dark-active": transformColor(customColor, -0.1),
              "--custom-color-dark-text": customColor,
            };
        }
      }
      return {};
    };

    const renderLoadingIndicator = (props?: ICircularProgressProps) => (
      <CircularProgress size={ECircularProgressSize.SMALL} {...props} />
    );

    const renderIconTypeContent = () => {
      if (loading) {
        return renderLoadingIndicator({
          className: styles.icon,
        });
      }
      return Icon ? <Icon className={styles.icon} size={20} /> : null;
    };

    const renderStart = () => {
      if ((loading && !IconEnd) || (loading && IconEnd && IconStart)) {
        return renderLoadingIndicator({
          className: styles.start,
        });
      } else if (IconStart) {
        return <IconStart className={styles.start} size={20} />;
      }
      return null;
    };

    const renderEnd = () => {
      if (loading && IconEnd && !IconStart) {
        return renderLoadingIndicator({
          className: styles.end,
        });
      } else if (IconEnd) {
        return <IconEnd className={styles.end} size={20} />;
      }
      return null;
    };

    const renderDefaultTypeContent = () => (
      <Fragment>
        {renderStart()}
        {children}
        {renderEnd()}
      </Fragment>
    );

    return (
      <motion.button
        ref={ref}
        className={classNames(
          styles.button,
          variant && styles[variant],
          size && styles[size],
          color && styles[color],
          disabled && styles.disabled,
          isFetching && styles.isFetching,
          customColor && styles.custom,
          loading && styles.loading,
          toggleButton && styles.toggleButton,
          selected && styles.selected,
          className
        )}
        disabled={disabled || loading || isFetching}
        {...buttonProps}
        style={
          {
            ...getCustomColor(),
            ...buttonProps.style,
          } as React.CSSProperties
        }
      >
        {buttonType === EButtonBaseTypes.ICON
          ? renderIconTypeContent()
          : renderDefaultTypeContent()}
      </motion.button>
    );
  }
);

ButtonBase.defaultProps = {
  type: "button",
  color: EButtonBaseColors.PRIMARY,
  disabled: false,
  size: EButtonBaseSizes.MEDIUM,
  variant: EButtonBaseVariants.CONTAINED,
};

export interface IButtonBaseProps
  extends React.ComponentProps<typeof ButtonBase> {}

export default ButtonBase;
