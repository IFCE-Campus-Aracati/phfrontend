import { Container, TextAreaContainer } from "./styles"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  value?: string;
}

export function TextArea({ placeholder, value, ...rest }: TextAreaProps) {
  return (
    <Container>
      <TextAreaContainer
        placeholder={placeholder}
        {...rest}
      >{value}</TextAreaContainer>
    </Container>
  )
}