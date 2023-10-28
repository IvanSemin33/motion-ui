import { HTMLAttributes } from "react";

import classNames from "classnames";
import { noop } from "lodash";

import {
  GoChevronLeft as ChevronLeftIcon,
  GoChevronRight as ChevronRightIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";
import IconButton, {
  EIconButtonColors,
  EIconButtonSizes,
  EIconButtonVariants,
} from "../IconButton";
import Input, { EInputVariants } from "../Input";

export interface IPaginationOwnProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  isFetching?: boolean;
  label?: string;
  nextDisabled?: boolean;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  page: number;
  pageCount?: number;
  prevDisabled?: boolean;
  setPage: (page: number) => void;
}

export type TPaginationRef = HTMLDivElement;

const Pagination = wrapper<TPaginationRef, IPaginationOwnProps>(
  (
    {
      className,
      isFetching,
      label,
      nextDisabled,
      onClickNext,
      onClickPrev,
      page,
      pageCount,
      prevDisabled,
      setPage,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={classNames(
          styles.container,
          isFetching && styles.isFetching,
          className
        )}
        ref={ref}
        {...restProps}
      >
        <IconButton
          onClick={onClickPrev}
          disabled={prevDisabled}
          Icon={ChevronLeftIcon}
          variant={EIconButtonVariants.CONTAINED}
          color={EIconButtonColors.SECONDARY}
          size={EIconButtonSizes.SMALL}
          isFetching={isFetching}
        />
        <Input
          className={styles.pageInput}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            setPage(page);
          }}
          value={page + 1}
          variant={EInputVariants.OUTLINED}
          style={{ width: `${((page || 0) + 1).toString().length}ch` }}
          isFetching={isFetching}
        />
        <IconButton
          onClick={onClickNext}
          disabled={nextDisabled}
          Icon={ChevronRightIcon}
          variant={EIconButtonVariants.CONTAINED}
          color={EIconButtonColors.SECONDARY}
          size={EIconButtonSizes.SMALL}
          isFetching={isFetching}
        />
        <div className={styles.count}>
          {label}
          <span>{` ${pageCount}`}</span>
        </div>
      </div>
    );
  }
);

Pagination.defaultProps = {
  label: "from",
  nextDisabled: false,
  onClickNext: noop,
  onClickPrev: noop,
  pageCount: 0,
  prevDisabled: false,
};

export type IPaginationProps = React.ComponentProps<typeof Pagination>;

export default Pagination;
