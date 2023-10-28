import { HTMLAttributes } from "react";

import classNames from "classnames";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";
import { IconType } from "react-icons";

export type TAction = {
  label: string;
  value: string;
  Icon: IconType;
};

export interface IBottomNavigationOwnProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  actions: TAction[];
  className?: string;
  onChange: (value: string) => void;
  value: string;
}

export type TBottomNavigationRef = HTMLDivElement;

const BottomNavigation = wrapper<
  TBottomNavigationRef,
  IBottomNavigationOwnProps
>(({ className, value, onChange, actions, ...containerProps }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.container, className)}
      {...containerProps}
    >
      {actions.map(({ label, value: actionValue, Icon }) => (
        <button
          key={actionValue}
          className={classNames(
            styles.action,
            value === actionValue && styles.active
          )}
          onClick={() => onChange(actionValue)}
        >
          <Icon size={20} />
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  );
});

BottomNavigation.defaultProps = {};

export interface IBottomNavigationProps
  extends React.ComponentProps<typeof BottomNavigation> {}

export default BottomNavigation;
