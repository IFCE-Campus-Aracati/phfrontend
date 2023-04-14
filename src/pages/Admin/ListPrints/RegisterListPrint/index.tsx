import { Button } from "../../../../components/Button";
import { InputFile } from "../../../../components/InputFile";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "ABS", text: "ABS" },
  { value: "PLA", text: "PLA" },
  { value: "PETG", text: "PETG" },
];

export function RegisterListPrint() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Adicionar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão" />

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Informe alguma informação sobre o que você deseja imprimir" />

          <TitleInput>Arquivo para impressão</TitleInput>
          <InputFile label={"Anexar"} />
          <TitleInput>Dados da Impressão</TitleInput>
          <Attachments>
            <TextAttachments>Data para início:</TextAttachments>
            <InputDate type="date" />
            <TextAttachments>Duração:</TextAttachments>
            <InputText defaultValue={"40"} type="text" />
          </Attachments>
          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput placeholder="Selecione o Material" open={true} options={options} />

          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate("/admin/list_prints")}
            />
            <Button
              title="SALVAR"
              variant="fill"
              size="small"
              onClick={() => navigate("/admin/list_prints")}
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}