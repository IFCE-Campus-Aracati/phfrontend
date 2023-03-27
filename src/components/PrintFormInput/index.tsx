import { Placeholder } from "@phosphor-icons/react";
import { Container, InputContainer } from "./styles";

interface PrintFormInputProps {
  placeholder: string;
}

export function PrintFormInput({placeholder, ...rest} : PrintFormInputProps){
  return(
    <Container>
      <InputContainer {...rest} 
        placeholder={placeholder}
      />
    </Container>
  );
}