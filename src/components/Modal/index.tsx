import { Delete } from "./Delete/Delete";
import { DetailsPrint } from "./detailsPrint/detailsPrint";
import { DetailsPrinters } from "./detailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./changePassword/changePassword";
import { DetailsAnonymous } from "./detailsAnonymous/detailsAnonymous";
import { DeletePrint } from "./DeletePrint/DeletePrint";

import { PrinterProps, ListTableDataProps, UserProps, PrintProps } from "../../utils/interfaces";

interface ModalProps {
  data: PrinterProps | UserProps | ListTableDataProps | PrintProps | PrintProps | undefined;
  variant:
    | "changePassword"
    | "detailsAnonymous"
    | "detailsPrint"
    | "detailsPrinters"
    | "detailsUser"
    | "delete"
    | "detailsAnonymousTable"
    | "deletePrint";
  children?: React.ReactNode;
  title: string;
  route: string;
  value?: boolean;
  setValue?: (value: boolean) => void;
}

export function Modal({ data, variant, children, title, route, value, setValue }: ModalProps) {
  switch (variant) {
    case "changePassword":
      return <ChangePassword tilte={title}>{children}</ChangePassword>;
    case "detailsAnonymous":
      return (
        <DetailsAnonymous
          data={data as PrintProps}
          value={value as boolean}
          setValue={setValue as (value: boolean) => void}
          title={title}
        />
      );
    case "detailsAnonymousTable":
      return (
        <DetailsAnonymous
          data={data as PrintProps}
          value={value as boolean}
          setValue={setValue as (value: boolean) => void}
          title={title}
        >
          {children}
        </DetailsAnonymous>
      );
    case "detailsPrint":
      return (
        <DetailsPrint data={data as ListTableDataProps} title={title} route={route}>
          {children}
        </DetailsPrint>
      );
    case "detailsPrinters":
      return (
        <DetailsPrinters data={data as PrinterProps} tilte={title}>
          {children}
        </DetailsPrinters>
      );
    case "detailsUser":
      return (
        <DetailsUser data={data as UserProps} tilte={title}>
          {children}
        </DetailsUser>
      );
    case "delete":
      return (
        <Delete id={data?.id} tilte={title}>
          {children}
        </Delete>
      );
    case "deletePrint":
      return (
        <DeletePrint id={data?.id} tilte={title}>
          {children}
        </DeletePrint>
      );
  }
}
