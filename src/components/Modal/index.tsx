import { Delete } from "./Delete/Delete";
import { DetailsPrint } from "./detailsPrint/detailsPrint";
import { DetailsPrinters } from "./detailsPrinters/detailsPrinters";
import { DetailsUser } from "./DetailsUser/detailsUser";
import { ChangePassword } from "./changePassword/changePassword";
import { DateProps, DetailsAnonymous } from "./detailsAnonymous/detailsAnonymous";
import { Printers, Prints, UsersData } from "../../hooks/auth";

interface ModalProps {
  data: Printers | UsersData | Prints | DateProps | undefined;
  variant: "changePassword" | "detailsAnonymous" | "detailsPrint" | "detailsPrinters" | "detailsUser" | "delete";
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
          data={data as DateProps}
          value={value as boolean}
          setValue={setValue as (value: boolean) => void}
          title={title}
        />
      );
    case "detailsPrint":
      return (
        <DetailsPrint data={data as Prints} title={title} route={route}>
          {children}
        </DetailsPrint>
      );
    case "detailsPrinters":
      return (
        <DetailsPrinters data={data as Printers} tilte={title}>
          {children}
        </DetailsPrinters>
      );
    case "detailsUser":
      return (
        <DetailsUser data={data as UsersData} tilte={title}>
          {children}
        </DetailsUser>
      );
    case "delete":
      return (
        <Delete id={data?.id} tilte={title}>
          {children}
        </Delete>
      );
  }
}
