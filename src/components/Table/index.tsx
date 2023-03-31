import { ListTable, ListTableDataProps } from "./ListTable";
import { PrintersTable, PrintersTableDataProps } from "./PrintersTable";
import { SearchTable, SearchTableDataProps } from "./SearchTable";
import { UserTableDataProps, UserTable } from "./UserTable";

interface TableProp {
  variant: "users" | "list" | "printers" | "search";
  data:
    | ListTableDataProps[]
    | PrintersTableDataProps[]
    | SearchTableDataProps[]
    | UserTableDataProps[];
  header: string[];
}

export function Table({ variant, data, header }: TableProp) {
  switch (variant) {
    case "list":
      return (
        <ListTable
          data={data as ListTableDataProps[]}
          header={header}
          isView
          isEdit
        />
      );

    case "printers":
      return (
        <PrintersTable
          data={data as PrintersTableDataProps[]}
          header={header}
          isView
          isEdit
          isDelete
        />
      );

    case "search":
      return (
        <SearchTable
          data={data as SearchTableDataProps[]}
          header={header}
          isView
        />
      );

    case "users":
      return (
        <UserTable
          data={data as UserTableDataProps[]}
          header={header}
          isView
          isEdit
        />
      );
  }
}