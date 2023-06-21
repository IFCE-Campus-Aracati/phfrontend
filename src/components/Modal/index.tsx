import { Delete } from "./Delete/Delete";
import { DetailsPrint } from "./detailsPrint/detailsPrint";
import { DetailsPrinters } from "./detailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./changePassword/changePassword";
import { DetailsAnonymous } from "./detailsAnonymous/detailsAnonymous";
import { PrintersTableDataProps } from "../Table/PrintersTable";
import { Printers } from "../../hooks/auth";


interface ModalProps {
  data: Printers;
  variant:
  | "changePassword"
  | "detailsAnonymous"
  | "detailsPrint"
  | "detailsPrinters"
  | "detailsUser"
  | "delete";
  children: React.ReactNode;
  title: string;
  route: string;
}

export function Modal({ data, variant, children, title, route }: ModalProps) {
  switch (variant) {
    case "changePassword":
      return <ChangePassword tilte={title}>{children}</ChangePassword>;
    case "detailsAnonymous":
      return <DetailsAnonymous title={title}>{children}</DetailsAnonymous>;
    case "detailsPrint":
      return (
        <DetailsPrint tilte={title} route={route}>
          {children}
        </DetailsPrint>
      );
    case "detailsPrinters":
      return <DetailsPrinters data={data} tilte={title}>{children}</DetailsPrinters>;
    case "detailsUser":
      return <DetailsUser tilte={title}>{children}</DetailsUser>;
    case "delete":
      return <Delete id={data.id} tilte={title}>{children}</Delete>;
  }
}
