import { Fragment, HTMLAttributes } from "react";

import classNames from "classnames";
import { useMeasure } from "react-use";

import {
  GoChevronDown as ArrowDownIcon,
  GoChevronUp as ArrowUpIcon,
  GoArrowBoth as SortingIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import Pagination from "../Pagination";

import {
  ColumnDef,
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Header,
  OnChangeFn,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

export interface ITableOwnProps<TData> extends HTMLAttributes<HTMLDivElement> {
  columnPinning?: ColumnPinningState;
  columns: ColumnDef<TData>[];
  data?: TData[];
  getRowCanExpand?: (row: Row<TData>) => boolean;
  isFetching?: boolean;
  pageCount?: number;
  pagination?: PaginationState;
  paginationLabel?: string;
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactNode;
  rowIdKey?: string;
  rowSelection?: RowSelectionState;
  setColumnPinning?: OnChangeFn<ColumnPinningState>;
  setPagination?: OnChangeFn<PaginationState>;
  setRowSelection?: OnChangeFn<RowSelectionState>;
  setSorting?: OnChangeFn<SortingState>;
  sorting?: SortingState;
}

export type TTableRef = HTMLTableElement;

// TODO: add wrapper
const Table = <TData,>({
  className,
  columnPinning,
  columns,
  data,
  getRowCanExpand,
  isFetching,
  pageCount,
  pagination,
  paginationLabel,
  renderSubComponent,
  rowIdKey,
  rowSelection,
  setColumnPinning,
  setPagination,
  setRowSelection,
  setSorting,
  sorting,
  ...restProps
}: ITableOwnProps<TData>) => {
  const table = useReactTable({
    data: data || [],
    columns,
    state: {
      sorting,
      pagination,
      rowSelection,
      columnPinning,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    getRowCanExpand,
    manualPagination: true,
    pageCount: pageCount ?? -1,
    debugTable: true,
    enableMultiRowSelection: true,
    // eslint-disable-next-line
    // @ts-ignore
    getRowId: (row) => row[rowIdKey] || row?.id,
  });

  const [containerRef, { width: containerWidth }] =
    useMeasure<HTMLDivElement>();

  const leftWidth = table.getLeftTotalSize();
  const rightWidth = table.getRightTotalSize();
  const centerWidth = containerWidth - leftWidth - rightWidth;

  const renderSorting = (header: Header<TData, unknown>) => {
    const iconProps = {
      className: styles.sortingIcon,
      size: 16,
    };

    return header.column.getCanSort() && setSorting
      ? {
          asc: <ArrowUpIcon {...iconProps} />,
          desc: <ArrowDownIcon {...iconProps} />,
        }[header.column.getIsSorted() as string] || (
          <SortingIcon
            {...iconProps}
            style={{
              transform: "rotate(90deg)",
            }}
          />
        )
      : null;
  };

  const renderTablePart = (position: "left" | "center" | "right") => {
    const headerGroups = (() => {
      switch (position) {
        case "left":
          return table.getLeftHeaderGroups();
        case "center":
          return table.getCenterHeaderGroups();
        case "right":
          return table.getRightHeaderGroups();
      }
    })();

    const getVisibleCells = (row: Row<TData>) => {
      switch (position) {
        case "left":
          return row.getLeftVisibleCells();
        case "center":
          return row.getCenterVisibleCells();
        case "right":
          return row.getRightVisibleCells();
      }
    };

    return headerGroups[0].headers.length ? (
      <table className={classNames(styles.table, styles[position])}>
        <thead className={styles.thead}>
          {headerGroups.map((headerGroup) => (
            <tr className={styles.tr} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className={classNames(
                    styles.th,
                    header.isPlaceholder && styles.thEmpty
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                  key={header.id}
                  style={{
                    width: header.getSize(),
                  }}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={classNames(
                        styles.thContent,
                        header.column.getCanSort() &&
                          setSorting &&
                          styles.sortable
                      )}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {renderSorting(header)}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody}>
          {table.getRowModel().rows.map((row, i) => (
            <Fragment>
              <tr
                className={classNames(
                  styles.tr,
                  (i + 1) % 2 === 0 && styles.odd,
                  row.getIsExpanded() && styles.expanded
                )}
                key={row.id}
              >
                {getVisibleCells(row).map((cell) => (
                  <td
                    className={styles.td}
                    key={cell.id}
                    style={{
                      width: cell.column.getSize(),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && renderSubComponent && (
                <tr
                  className={classNames(
                    styles.subRow,
                    (i + 1) % 2 === 0 && styles.odd
                  )}
                >
                  <td
                    className={styles.subTd}
                    colSpan={row.getVisibleCells().length}
                  >
                    {renderSubComponent({ row })}
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    ) : null;
  };

  const renderPagination = () => {
    return setPagination && pagination ? (
      <Pagination
        className={styles.pagination}
        nextDisabled={!table.getCanNextPage()}
        onClickNext={() => table.nextPage()}
        onClickPrev={() => table.previousPage()}
        page={pagination?.pageIndex ?? 0}
        pageCount={table.getPageCount()}
        prevDisabled={!table.getCanPreviousPage()}
        setPage={table.setPageIndex}
        isFetching={isFetching}
        label={paginationLabel}
      />
    ) : null;
  };

  return (
    <Fragment>
      <div
        className={classNames(
          styles.container,
          isFetching && styles.isFetching,
          className
        )}
        {...restProps}
        ref={containerRef}
      >
        {renderTablePart("left")}
        <div
          className={styles.centerWrapper}
          style={{
            marginLeft: leftWidth,
            marginRight: rightWidth,
            width: centerWidth,
          }}
        >
          {renderTablePart("center")}
        </div>
        {renderTablePart("right")}
      </div>
      {renderPagination()}
    </Fragment>
  );
};

Table.defaultProps = {
  paginationLabel: "from",
  columnPinning: {},
};

export type ITableProps = React.ComponentProps<typeof Table>;

export default Table;
