import { Placeholder } from "@phosphor-icons/react";
import { Container, InputContainer } from "./styles";


interface PrintFormInputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string | number | readonly string[] | undefined;
}

export function PrintFormInput({ placeholder, ...rest }: PrintFormInputProps) {
  return (
    <Container>
      <InputContainer
        {...rest}
        placeholder={placeholder}
      />
    </Container>
  );
}