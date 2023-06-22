import { Container, InputContainer } from "./styles";


interface PrintFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value?: string;
}

export function PrintFormInput({ placeholder, value, ...rest }: PrintFormInputProps) {
  return (
    <Container>
      <InputContainer
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </Container>
  );
}