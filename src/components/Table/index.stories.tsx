import { useState } from "react";

import { GoChevronUp, GoChevronDown } from "react-icons/go";

import { ECategories, isFetching } from "../../utils/argTypes";
import Checkbox, { ECheckboxVariants } from "../Checkbox";
import Chip from "../Chip";
import IconButton, {
  EIconButtonColors,
  EIconButtonVariants,
} from "../IconButton";
import { default as PaginationComponent } from "../Pagination";

import Table from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  ColumnDef,
  ColumnPinningState,
  createColumnHelper,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table";

export default {
  title: "Data Display/Table",
  // component: Table,
  zeplinLink: "",
  parameters: { controls: { sort: "requiredFirst" } },
  subcomponents: {
    Pagination: PaginationComponent,
  },
  argTypes: {
    columnPinning: {
      control: {
        type: "object",
      },
      description: "Column pinning state.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "ColumnPinningState",
        },
      },
    },
    columns: {
      control: {
        type: "object",
      },
      type: {
        name: "array",
        required: true,
        value: {
          name: "other",
          value: "ColumnDef<TData>",
        },
      },
      description: "Columns definition.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "ColumnDef<TData>[]",
        },
      },
    },
    data: {
      control: {
        type: "object",
      },
      describtion: "Data to be displayed.",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "TData[]",
        },
      },
    },
    getRowCanExpand: {
      control: {
        type: "function",
      },
      description: "Function to determine if row can be expanded.",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "(row: Row<TData>) => boolean",
        },
      },
    },
    isFetching,
    pageCount: {
      control: {
        type: "number",
      },
      description: "Number of pages.",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "number",
        },
      },
    },
    pagination: {
      control: {
        type: "object",
      },
      description: "Pagination state.",
      table: {
        category: ECategories.STATE,
        type: {
          summary: "PaginationState",
        },
      },
    },
    paginationLabel: {
      control: {
        type: "text",
      },
      description: "Label for pagination",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "from",
        },
      },
    },
    renderSubComponent: {
      control: {
        type: "function",
      },
      description: "Function to render sub component.",
      table: {
        category: ECategories.APPEARANCE,
        type: {
          summary: "(row: Row<TData>) => ReactNode",
        },
      },
    },
    rowIdKey: {
      control: {
        type: "text",
      },
      description: "Key to identify row.",
      table: {
        category: ECategories.DATA,
        type: {
          summary: "string",
        },
      },
    },
    rowSelection: {
      control: {
        type: "object",
      },
      description: "Row selection state.",
      table: {
        category: ECategories.STATE,
        type: {
          summary: "RowSelectionState",
        },
      },
    },
    setColumnPinning: {
      control: {
        type: "function",
      },
      description: "Function to set column pinning state.",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "OnChangeFn<ColumnPinningState>",
        },
      },
    },
    setPagination: {
      control: {
        type: "function",
      },
      description: "Function to set pagination state.",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "OnChangeFn<PaginationState>",
        },
      },
    },
    setRowSelection: {
      control: {
        type: "function",
      },
      description: "Function to set row selection state.",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "OnChangeFn<RowSelectionState>",
        },
      },
    },
    setSorting: {
      control: {
        type: "function",
      },
      description: "Function to set sorting state.",
      table: {
        category: ECategories.BEHAVIOR,
        type: {
          summary: "OnChangeFn<SortingState>",
        },
      },
    },
    sorting: {
      control: {
        type: "object",
      },
      description: "Sorting state.",
      table: {
        category: ECategories.STATE,
        type: {
          summary: "SortingState",
        },
      },
    },
  },
} as ComponentMeta<typeof Table>;

type Product = {
  selected: boolean;
  name: string;
  date: Date;
  count: number;
  status: string;
  description: string;
  id: number;
  variants?: string[];
  primary_color?: string;
  secondary_color?: string;
  third_color?: string;
};

const data: Product[] = Array(100)
  .fill(1)
  .map((_, i) => ({
    id: i,
    selected: false,
    name: `Product_${i + 1}`,
    date: new Date(),
    count: Math.floor(Math.random() * 100) * i,
    status: "Active",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies.",
    variants: ["Variant 1", "Variant 2", "Variant 3"],
    primary_color: "🔴",
    secondary_color: "🔵",
    third_color: "🟢",
  }));

const columnHelper = createColumnHelper<Product>();

const columns: ColumnDef<Product, any>[] = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
    minSize: 100,
    maxSize: 200,
  }),
  columnHelper.accessor("date", {
    cell: (info) => (
      <span>{`${(info.getValue() as Date).getDate()}.${(
        info.getValue() as Date
      ).getMonth()}.${(info.getValue() as Date).getFullYear()}`}</span>
    ),
    header: () => <span>Date</span>,
    minSize: 100,
    maxSize: 200,
  }),
  columnHelper.accessor("count", {
    header: () => <span>Count</span>,
    minSize: 80,
    maxSize: 80,
  }),
  columnHelper.accessor("description", {
    header: () => <span>Description</span>,
    minSize: 200,
    maxSize: 220,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    enableSorting: false,
    minSize: 100,
    maxSize: 200,
  }),
];

export const Simple: ComponentStory<typeof Table> = (args) => {
  return (
    <Table
      data={data}
      columns={columns}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
    />
  );
};

export const Sorting: ComponentStory<typeof Table> = (args) => {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "count",
      desc: false,
    },
  ]);

  return (
    <Table
      data={data}
      columns={columns}
      sorting={sorting}
      setSorting={setSorting}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
    />
  );
};

export const Pagination: ComponentStory<typeof Table> = (args) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <Table
      data={data.slice(
        pagination.pageIndex * pagination.pageSize,
        (pagination.pageIndex + 1) * pagination.pageSize
      )}
      pageCount={Math.ceil(data.length / pagination.pageSize)}
      columns={columns}
      pagination={pagination}
      setPagination={setPagination}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
    />
  );
};

const selectionColumns: ColumnDef<Product, any>[] = [
  columnHelper.accessor("selected", {
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
        variant={ECheckboxVariants.OUTLINED}
      />
    ),
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        variant={ECheckboxVariants.OUTLINED}
      />
    ),
    minSize: 50,
    maxSize: 50,
  }),
  ...columns,
];

export const Selection: ComponentStory<typeof Table> = (args) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [rowSelection, setRowSelection] = useState<RowSelectionState>([]);

  return (
    <Table
      columns={selectionColumns}
      data={data.slice(
        pagination.pageIndex * pagination.pageSize,
        (pagination.pageIndex + 1) * pagination.pageSize
      )}
      pageCount={Math.ceil(data.length / pagination.pageSize)}
      pagination={pagination}
      setPagination={setPagination}
      rowSelection={rowSelection}
      setRowSelection={setRowSelection}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
      rowIdKey="id"
    />
  );
};

export const ColumnPinning: ComponentStory<typeof Table> = (args) => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ["name"],
    right: ["status", "count"],
  });

  return (
    <Table
      data={data}
      columns={columns}
      columnPinning={columnPinning}
      setColumnPinning={setColumnPinning}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
    />
  );
};

const subRowsColumns: ColumnDef<Product, any>[] = [
  columnHelper.display({
    id: "expander",
    cell: ({ row }) =>
      row.getCanExpand() ? (
        <IconButton
          onClick={row.getToggleExpandedHandler()}
          style={{ cursor: "pointer" }}
          Icon={row.getIsExpanded() ? GoChevronUp : GoChevronDown}
          variant={EIconButtonVariants.DEFAULT}
          color={EIconButtonColors.SECONDARY}
        />
      ) : null,
    minSize: 50,
    maxSize: 50,
  }),
  ...columns,
];

export const Expanding: ComponentStory<typeof Table> = (args) => {
  const renderSubComponent = ({ row }: { row: Row<Product> }) => {
    if (row.original.variants) {
      return (
        <div style={{ display: "flex", gap: "20px" }}>
          {row.original.variants.map((variant) => (
            <Chip label={variant} />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Table
      {...args}
      data={data}
      columns={subRowsColumns}
      renderSubComponent={renderSubComponent}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
      getRowCanExpand={() => true}
    />
  );
};

export const ColumnGroups: ComponentStory<typeof Table> = () => {
  const columnGroups = [
    columnHelper.group({
      id: "colors",
      columns: [
        columnHelper.accessor("primary_color", {
          header: () => <span>Primary</span>,
          cell: (info) => info.getValue(),
          minSize: 100,
          maxSize: 100,
        }),
        columnHelper.accessor("secondary_color", {
          header: () => <span>Secondary</span>,
          cell: (info) => info.getValue(),
          minSize: 100,
          maxSize: 100,
        }),
        columnHelper.accessor("third_color", {
          header: () => <span>Third</span>,
          cell: (info) => info.getValue(),
          minSize: 100,
          maxSize: 100,
        }),
      ],
      header: () => <span>Colors</span>,
    }),
  ];

  return (
    <Table
      data={data}
      columns={[...columns.slice(0, 2), ...columnGroups, ...columns.slice(2)]}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
    />
  );
};

export const IsFetching: ComponentStory<typeof Table> = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <Table
      data={data.slice(
        pagination.pageIndex * pagination.pageSize,
        (pagination.pageIndex + 1) * pagination.pageSize
      )}
      pageCount={Math.ceil(data.length / pagination.pageSize)}
      columns={columns}
      pagination={pagination}
      setPagination={setPagination}
      style={{
        height: "70vh",
        overflow: "scroll",
      }}
      isFetching
    />
  );
};
