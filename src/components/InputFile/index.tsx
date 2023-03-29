import { Paperclip } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";
import { Container, FileInput, Label } from "./styles";

interface InputFileProps {
  label: string;
}

//TODO: Fazer aparecer o nome do arquivo!
export function InputFile({label, ...rest} : InputFileProps) {
  return(
    <Container>
      <Paperclip 
        size={20}
        weight="bold" 
        color={theme.colors.black}
        />
      <Label htmlFor="fileinput">{label}</Label>
      <FileInput 
        type='file' 
        id="fileinput"
        {...rest}
      />
    </Container>
  );
}