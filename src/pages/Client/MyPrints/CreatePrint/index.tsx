import { Button } from "../../../../components/Button";
import { FileUploader } from "../../../../components/FileUploader"
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, ButtonFile} from "./styles";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "ABS", text: "ABS" },
  { value: "PLA", text: "PLA" },
  { value: "PETG", text: "PETG" },
];

export function CreatePrint() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Solicitar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão" />

          <TitleInput>Descrição</TitleInput>
          <TextArea placeholder="Informe alguma informação sobre o que você deseja imprimir" />

          <TitleInput>Arquivo para impressão</TitleInput>
          <ButtonFile>
            <FileUploader/>
          </ButtonFile>
          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            open={true}
            options={options}
            onValueChange={() => { }}
          />
          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate("/client/my_prints")}
            />
            <Button
              title="SALVAR"
              variant="fill"
              size="small"
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}