import { ArrowLeft } from "@phosphor-icons/react";
import { Button } from "../../../components/Button";
import { InputFile } from "../../../components/InputFile";
import { PrintFormInput } from "../../../components/PrintFormInput";
import { SelectInput } from "../../../components/Select";
import { TextArea } from "../../../components/TextArea";
import { ButtonBack, Container, Content, Footer, FormContainer, Header, Title, TitleInput } from "./styles";
import { useNavigate } from "react-router-dom";

export function RequestPrinting() {
  const navigate = useNavigate();

  const options = [
    {value: "ABS", text: "ABS"},
    {value: "exemplo1", text: "exemplo1"},
    {value: "exemplo2", text: "exemplo2"},
  ];

  return (
    <Container>
      <Content>
        <Header>
        <ButtonBack onClick={() => navigate("/")}>
            <ArrowLeft size={20} weight="bold" />
          </ButtonBack>
        <Title>Solicitar Impressão</Title>
        </Header>
        

        <FormContainer>
          <TitleInput>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão"/>

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Informe alguma informação sobre o que você deseja imprimir"/>

          <TitleInput>Arquivo para impressão</TitleInput>
          <InputFile label={"Anexar"}/>

          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput options={options}/>
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