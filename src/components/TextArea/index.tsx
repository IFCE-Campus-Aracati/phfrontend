import { Container, TextAreaContainer } from "./styles"

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string | number | readonly string[] | undefined;
}

export function TextArea({ placeholder, ...rest }: TextAreaProps) {
  return (
    <Container>
      <TextAreaContainer {...rest}
        placeholder={placeholder} />
    </Container>
  )
}