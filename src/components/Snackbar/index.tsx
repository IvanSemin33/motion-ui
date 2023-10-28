import classNames from "classnames";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { createPortal } from "react-dom";

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

export enum ESnackbarVariants {
  TEMPORARY = "temporary",
  PERMANENT = "permanent",
}

export enum ESnackbarSeverity {
  DEFAULT = "default",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
  QUESTION = "question",
  SUCCESS = "success",
}

export interface ISnackbarOwnProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  action?: React.ReactNode;
  description?: string;
  onClose?: () => void;
  open?: boolean;
  severity?: ESnackbarSeverity;
  title?: string;
  variant?: ESnackbarVariants;
}

export type TSnackbarRef = HTMLDivElement;

const MotionCloseIcon = motion(CloseIcon);

// TODO: add close duration if needed
const Snackbar = wrapper<TSnackbarRef, ISnackbarOwnProps>(
  (
    {
      action,
      variant,
      description,
      open,
      className,
      onClose,
      severity,
      title,
      ...containerProps
    },
    ref
  ) => {
    const getIcon = () => {
      switch (severity) {
        case ESnackbarSeverity.WARNING:
          return <WarningIcon className={styles.icon} />;
        case ESnackbarSeverity.ERROR:
          return <ErrorIcon className={styles.icon} />;
        case ESnackbarSeverity.INFO:
          return <InfoIcon className={styles.icon} />;
        case ESnackbarSeverity.QUESTION:
          return <QuestionsIcon className={styles.icon} />;
        case ESnackbarSeverity.SUCCESS:
          return <CheckCircleIcon className={styles.icon} />;
        default:
          return null;
      }
    };

    const renderSnackbar = () => (
      <motion.div
        ref={ref}
        className={classNames(
          styles.container,
          severity && styles[severity],
          variant && styles[variant],
          className
        )}
        {...containerProps}
      >
        {severity !== ESnackbarSeverity.DEFAULT && (
          <motion.div
            className={styles.iconWrapper}
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          >
            {getIcon()}
          </motion.div>
        )}
        <motion.div
          className={styles.content}
          initial={{ x: -16, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
          }}
        >
          {title && <div className={styles.title}>{title}</div>}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </motion.div>
        {action && (
          <motion.div
            className={styles.action}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.6 },
            }}
          >
            {action}
          </motion.div>
        )}
        {onClose && (
          <MotionCloseIcon
            className={styles.close}
            onClick={onClose}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.6 },
            }}
          />
        )}
      </motion.div>
    );

    return variant === ESnackbarVariants.TEMPORARY
      ? createPortal(
          <AnimatePresence>{open && renderSnackbar()}</AnimatePresence>,
          document.body
        )
      : renderSnackbar();
  }
);

Snackbar.defaultProps = {
  open: false,
  severity: ESnackbarSeverity.DEFAULT,
  variant: ESnackbarVariants.TEMPORARY,
};

export interface ISnackbarProps extends React.ComponentProps<typeof Snackbar> {}

export default Snackbar;
