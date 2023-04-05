// import {
//   Container
// } from './styles';

import { DetailsPrinters } from "./DetailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";

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
    case "detailsAnonymous":
    case "detailsPrint":
    case "detailsPrinters":
      return <DetailsPrinters tilte={title}>{children}</DetailsPrinters>;
    case "detailsUser":
      return <DetailsUser tilte={title}>{children}</DetailsUser>;
  }
}
