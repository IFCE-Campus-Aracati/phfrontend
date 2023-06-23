import { Printers, Prints, UsersData } from "../../hooks/auth";
import { ClientListTable, ClientListTableDataProps } from "./ClientListTable";
import { ListTable, ListTableDataProps } from "./ListTable";
import { PrintersProps, PrintersTable } from "./PrintersTable";
import { SearchTable, SearchTableDataProps } from "./SearchTable";
import { UserTable, UserProps } from "./UserTable";

interface TableProp {
  variant: "users" | "list" | "client" | "printers" | "search";
  data:
  | ListTableDataProps[]
  | Prints[]
  | Printers[]
  | SearchTableDataProps[]
  | UsersData[];
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

    case "client":
      return (
        <ClientListTable
          data={data as Prints[]}
          header={header}
          isView
          isEdit
        />
      );

    case "printers":
      return (
        <PrintersTable
          data={data as PrintersProps[]}
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
          data={data as UserProps[]}
          header={header}
          isView
          isEdit
        />
      );
  }
}
