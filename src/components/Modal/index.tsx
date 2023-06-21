import { Delete } from "./Delete/Delete";
import { DetailsPrint } from "./DetailsPrint/DetailsPrint";
import { DetailsPrinters } from "./DetailsPrinters/DetailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./changePassword/changePassword";
import { DetailsAnonymous } from "./detailsAnonymous/detailsAnonymous";

interface ModalProps {
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

export function Modal({ variant, children, title, route }: ModalProps) {
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
      return <DetailsPrinters tilte={title}>{children}</DetailsPrinters>;
    case "detailsUser":
      return <DetailsUser tilte={title}>{children}</DetailsUser>;
    case "delete":
      return <Delete tilte={title}>{children}</Delete>;
  }
}
