import { Delete } from "./Delete/Delete";
import { DetailsPrint } from "./detailsPrint/detailsPrint";
import { DetailsPrinters } from "./detailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./changePassword/changePassword";
import { DetailsAnonymous } from "./detailsAnonymous/detailsAnonymous";
import { Printers, Prints, UsersData } from "../../hooks/auth";


interface ModalProps {
  data: Printers | UsersData | Prints | undefined;
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
        <DetailsPrint data={data as Prints} title={title} route={route}>
          {children}
        </DetailsPrint>
      );
    case "detailsPrinters":
      return <DetailsPrinters data={data as Printers} tilte={title}>{children}</DetailsPrinters>;
    case "detailsUser":
      return <DetailsUser data={data as UsersData} tilte={title}>{children}</DetailsUser>;
    case "delete":
      return <Delete id={data?.id} tilte={title}>{children}</Delete>;
  }
}
