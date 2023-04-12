import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { RadioGroup } from "../../../../components/RadioGroup";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const options1 = [
  { value: "option1", text: "ABS" },
  { value: "option2", text: "PLA" },
  { value: "option3", text: "PETG" },
];

const options2 = [
  { value: "option1", text: "3D" },
  { value: "option2", text: "Corte" },
];

export function RegisterPrinter() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Adicionar Impressora</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput placeholder="Nome da Impressora" />

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Adicione alguma informação sobre a impressora que deseja cadastrar" />

          <TitleInput>Tipo da Impressora</TitleInput>
          <SelectInput placeholder="Selecione o Tipo" open={true} options={options2} />
          <TitleInput>Material Trabalhado</TitleInput>
          <SelectInput placeholder="Selecione o Material" open={true} options={options1} />
          <TitleInput>Status</TitleInput>
          <StatusContainer>
            <RadioGroup variant="StatusPrinter" />
            <PrintFormInput placeholder="Motivo da Indisponibilidade" />
          </StatusContainer>

          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate("/admin/list_printers")}
            />
            <Button
              title="SALVAR"
              variant="fill"
              size="small"
              onClick={() => navigate("/admin/list_printers")}
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}