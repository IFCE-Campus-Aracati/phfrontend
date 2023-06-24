import { ClientListTable } from "./ClientListTable";
import { ListTable } from "./ListTable";
import { PrintersTable } from "./PrintersTable";
import { SearchTable } from "./SearchTable";
import { UserTable } from "./UserTable";

import { UserProps, PrinterProps, ListTableDataProps, PrintProps } from "../../utils/interfaces";

interface TableProp {
  variant: "users" | "list" | "client" | "printers" | "search";
  data: ListTableDataProps[] | PrinterProps[] | PrintProps | UserProps[];
  header: string[];
}

export function Table({ variant, data, header }: TableProp) {
  switch (variant) {
    case "list":
      return <ListTable data={data as ListTableDataProps[]} header={header} isView isEdit />;

    case "client":
      return <ClientListTable data={data as ListTableDataProps[]} header={header} isView isEdit />;

    case "printers":
      return <PrintersTable data={data as PrinterProps[]} header={header} isView isEdit isDelete />;

    case "search":
      return <SearchTable data={data as PrintProps} header={header} isView />;

    case "users":
      return <UserTable data={data as UserProps[]} header={header} isView isEdit />;
  }
}
