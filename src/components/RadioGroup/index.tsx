import { StatusPrint } from "./StatusPrint";
import { StatusPrinter } from "./StatusPrinter";
import { UserRole } from "./UserRole";


interface RadioGroupProps {
  variant:
  | "StatusPrint"
  | "StatusPrinter"
  | "UserRole"
}

export function RadioGroup({ variant }: RadioGroupProps) {
  switch (variant) {
    case "StatusPrint":
      return <StatusPrint />;
    case "StatusPrinter":
      return <StatusPrinter />;
    case "UserRole":
      return <UserRole />
  }
}