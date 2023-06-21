import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { RadioGroup } from "../../../../components/RadioGroup";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const statusOptions = [
  { text: 'Pendente', value: 'pending' },
  { text: 'Aprovado', value: 'approved' },
  { text: 'Recusado', value: 'denied' }
]

export function EditListPrint() {
  const navigate = useNavigate();


  return (
    <Container>
      <Content>
        <Title>Editar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão" />

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Informe alguma informação sobre o que você deseja imprimir" />

          <TitleInput>Arquivo para impressão</TitleInput>
          <Button
            size="medium"
            variant="fill"
            title="arquivo.stl"
          />
          <TitleInput>Dados da Impressão</TitleInput>
          <Attachments>
            <TextAttachments>Data para início:</TextAttachments>
            <InputDate type="date" />
            <TextAttachments>Duração:</TextAttachments>
            <InputText defaultValue={"40"} type="text" />
          </Attachments>
          <TitleInput>Status</TitleInput>
          <StatusContainer>
            {/* <RadioGroup
              options={statusOptions}
              onValueChange={ }
            /> */}
            <PrintFormInput placeholder="Motivo da Recusa" />
          </StatusContainer>

          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate("/admin/list_prints")}
            />
            <Button
              title="ATUALIZAR"
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