import { Paperclip } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";
import { Container, FileInput, Label } from "./styles";
import { useState } from "react";

interface InputFileProps {
  label: string;
}

export function InputFile({ label, ...rest }: InputFileProps) {
  const [documentName, setDocumentName] = useState('');
  return (
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