// import {
//   Container
// } from './styles';
import { DetailsPrinters } from "./detailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./changePassword/changePassword";
import { DetailsAnonymous } from "./detailsAnonymous/detailsAnonymous";

interface ModalProps {
  variant:
    | "changePassword"
    | "detailsAnonymous"
    | "detailsPrint"
    | "detailsPrinters"
    | "detailsUser";
  children: React.ReactNode;
  title: string;
}

export function Modal({ variant, children, title }: ModalProps) {
  switch (variant) {
    case "changePassword":
      return <ChangePassword tilte={title}>{children}</ChangePassword>;
    case "detailsAnonymous":
      return <DetailsAnonymous title={title}>{children}</DetailsAnonymous>
    case "detailsPrint":
    case "detailsPrinters":
      return <DetailsPrinters tilte={title}>{children}</DetailsPrinters>;
    case "detailsUser":
      return <DetailsUser tilte={title}>{children}</DetailsUser>;
  }
}


