import { Button } from "../../../components/Button";
import { InputFile } from "../../../components/InputFile";
import { PrintFormInput } from "../../../components/PrintFormInput";
import { SelectInput } from "../../../components/Select";
import { TextArea } from "../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments } from "./styles";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../../../components/SideBar";

const options = [
  { value: "option1", text: "ABS" },
  { value: "option2", text: "PLA" },
  { value: "option3", text: "PETG" },
];

export function EditPrint() {
  const navigate = useNavigate();

  return (
    <Container>
      <SideBar variant="client"> 
      </SideBar>
      <Content>
        <Title>Editar Impressão</Title>

        <FormContainer>
          <TitleInput>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão"/>

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Informe alguma informação sobre o que você deseja imprimir"/>

          <TitleInput>Arquivo para impressão</TitleInput>
            <Attachments>
              <InputFile label={"Anexar"}/>
              <Button  
                size="medium"
                variant="fill"
                title="arquivo.stl x"
                />
            </Attachments>
          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput open={true} options={options}/>
        </FormContainer>
      </Content>
      <Footer>
        <Button 
          title="cancelar" 
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