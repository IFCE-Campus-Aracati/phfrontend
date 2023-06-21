import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { RadioGroup } from "../../../../components/RadioGroup";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function EditPrinter() {
  const navigate = useNavigate();

  const statusOptions = [
    { value: 'pending', text: 'Pendente' },
    { value: 'approved', text: 'Aprovado' },
    { value: 'denied', text: 'Recusado' }
  ]

  const materialOptions = [
    { value: "ABS", text: "ABS" },
    { value: "PLA", text: "PLA" },
    { value: "PETG", text: "PETG" },
  ];

  const typeOptions = [
    { value: "3D", text: "3D" },
    { value: "Corte", text: "Corte" },
  ];

  return (
    <Container>
      <Content>
        <Title>Editar Impressora</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput placeholder="Nome da Impressora" />

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Adicione alguma informação sobre a impressora que deseja cadastrar" />

          <TitleInput>Tipo da Impressora</TitleInput>
          <SelectInput
            placeholder="Selecione o Tipo"
            open={true}
            options={typeOptions}
            onValueChange={() => { }}
          />
          <TitleInput>Material Trabalhado</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            open={true}
            options={materialOptions}
            onValueChange={() => { }}
          />
          <TitleInput>Status</TitleInput>
          <StatusContainer>
            <RadioGroup
              options={statusOptions}
              onValueChange={() => { }}
            />
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
              title="ATUALIZAR"
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