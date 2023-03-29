import { Button } from "../../../components/Button";
import { InputFile } from "../../../components/InputFile";
import { PrintFormInput } from "../../../components/PrintFormInput";
import { SelectInput } from "../../../components/Select";
import { TextArea } from "../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput } from "./styles";
import { useNavigate } from "react-router-dom";

export function RequestPrinting() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Solicitar Impressão</Title>

        <FormContainer>
          <TitleInput>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão"/>

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Informe alguma informação sobre o que você deseja imprimir"/>

          <TitleInput>Arquivo para impressão</TitleInput>
          <InputFile label={"Anexar"}/>

          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput />
        </FormContainer>
      </Content>
      <Footer>
        <Button 
          title="Cancelar" 
          variant="outline" 
          size="small" 
          onClick={() => navigate("/")}
          />
        <Button 
          title="ENVIAR" 
          variant="fill" 
          size="small" 
          />
      </Footer>
    </Container>
  );
}