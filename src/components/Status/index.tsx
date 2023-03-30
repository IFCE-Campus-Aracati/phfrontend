import { Container, Content, StatusText } from "./styles";

export interface StatusProps {
  variant: "pending" | "approved" | "decline" | "available" | "unavailable";
}

export function Status({ variant }: StatusProps) {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Content variant={variant}>
        <StatusText>
          {variant === "approved" && "Aprovado"}
          {variant === "decline" && "Recusado"}
          {variant === "pending" && "Pendente"}
          {variant === "available" && "Disponível"}
          {variant === "unavailable" && "Indisponível"}
        </StatusText>
      </Content>
    </Container>
  );
}
