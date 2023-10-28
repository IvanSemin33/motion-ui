import classNames from "classnames";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";
import { TTabsValue } from "../Tabs";
import { IconType } from "react-icons";

export enum ETabVariants {
  DEFAULT = "default",
}

export interface ITabOwnProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  IconEnd?: IconType;
  IconStart?: IconType;
  isFetching?: boolean;
  label?: string;
  value: TTabsValue;
  variant?: ETabVariants;
}

export type TTabRef = HTMLDivElement;

const Tab = wrapper<TTabRef, ITabOwnProps>(
  (
    {
      children,
      isFetching,
      className,
      IconEnd,
      IconStart,
      label,
      value,
      variant,
      active,
      ...containerProps
    },
    ref
  ) => {
    return (
      <div
        className={classNames(
          styles.container,
          active && styles.active,
          className,
          isFetching && styles.isFetching
        )}
        ref={ref}
        {...containerProps}
      >
        {IconStart && <IconStart size={16} />}
        {label}
        {children}
        {IconEnd && <IconEnd size={16} />}
      </div>
    );
  }
);

Tab.defaultProps = {
  variant: ETabVariants.DEFAULT,
};

export interface ITabProps extends React.ComponentProps<typeof Tab> {}

export default Tab;
