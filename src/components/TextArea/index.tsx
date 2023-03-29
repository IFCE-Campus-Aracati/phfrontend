import { Container, TextAreaContainer } from "./styles"

interface TextAreaProps {
  placeholder: string;
}

export function TextArea({ placeholder, ...rest} : TextAreaProps) {
  return (
    <Container>
      <TextAreaContainer {...rest} 
        placeholder={placeholder}/>
    </Container>
  )
}