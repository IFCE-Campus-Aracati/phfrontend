// import {
//   Container
// } from './styles';

import { DetailsPrinters } from "./DetailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./ChangePassword/changePassword";

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
    case "detailsPrint":
    case "detailsPrinters":
      return <DetailsPrinters tilte={title}>{children}</DetailsPrinters>;
    case "detailsUser":
      return <DetailsUser tilte={title}>{children}</DetailsUser>;
  }
}


