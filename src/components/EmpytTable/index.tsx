import { EmpytRegister, EmpytRegisterText } from "./styles";

interface IEmpytTable {
  text: string;
}

export function EmpytTable({ text }: IEmpytTable) {
  return (
    <EmpytRegister>
      <EmpytRegisterText>{text}</EmpytRegisterText>
    </EmpytRegister>
  );
}
