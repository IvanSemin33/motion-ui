import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";

import {
  GoCheckCircle as CheckCircleIcon,
  GoX as CloseIcon,
  GoXCircle as ErrorIcon,
  GoInfo as InfoIcon,
  GoQuestion as QuestionsIcon,
  GoAlert as WarningIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";

export enum EAlertSeverity {
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
  QUESTION = "question",
  SUCCESS = "success",
}

export interface IAlertOwnProps extends HTMLMotionProps<"div"> {
  action?: React.ReactNode;
  children?: React.ReactNode;
  icon?: boolean;
  isFetching?: boolean;
  onClose?: () => void;
  severity?: EAlertSeverity;
}

export type TAlertRef = HTMLDivElement;

const Alert = wrapper<TAlertRef, IAlertOwnProps>(
  (
    {
      action,
      icon,
      onClose,
      className,
      severity,
      children,
      isFetching,
      ...containerProps
    },
    ref
  ) => {
    const getIcon = () => {
      switch (severity) {
        case EAlertSeverity.WARNING:
          return <WarningIcon className={styles.icon} />;
        case EAlertSeverity.ERROR:
          return <ErrorIcon className={styles.icon} />;
        case EAlertSeverity.INFO:
          return <InfoIcon className={styles.icon} />;
        case EAlertSeverity.QUESTION:
          return <QuestionsIcon className={styles.icon} />;
        case EAlertSeverity.SUCCESS:
          return <CheckCircleIcon className={styles.icon} />;
        default:
          return null;
      }
    };

    return (
      <motion.div
        ref={ref}
        className={classNames(
          styles.container,
          severity && styles[severity],
          isFetching && styles.isFetching,
          className
        )}
        {...containerProps}
      >
        {icon && <div className={styles.iconWrapper}>{getIcon()}</div>}
        <div className={styles.content}>{children}</div>
        {action && <div className={styles.action}>{action}</div>}
        {!action && onClose && (
          <CloseIcon className={styles.close} onClick={onClose} size={20} />
        )}
      </motion.div>
    );
  }
);

Alert.defaultProps = {
  icon: true,
  isFetching: false,
  severity: EAlertSeverity.WARNING,
};

export interface IAlertProps extends React.ComponentProps<typeof Alert> {}

export default Alert;
