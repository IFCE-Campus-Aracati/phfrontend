import { Button } from "../../../../components/Button";
import { InputFile } from "../../../../components/InputFile";
import { FileUploader } from "../../../../components/FileUploader";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import {
  Container,
  Content,
  Footer,
  FormContainer,
  Title,
  TitleInput,
  Attachments,
  TextAttachments,
  InputDate,
  InputText,
  StatusContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonFile } from "../../../Client/MyPrints/CreatePrint/styles";
import { useAuth } from "../../../../hooks/auth";
import api from "../../../../server/api";
import { toast } from "react-toastify";

const options = [
  { value: "ABS", text: "ABS" },
  { value: "PLA", text: "PLA" },
  { value: "PETG", text: "PETG" },
];

export function RegisterListPrint() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [material, setMaterial] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  async function handleRequestPrint(event: React.MouseEvent) {
    event.preventDefault();

    await api
      .post(
        "/createPrint",
        {
          title,
          description,
          material,
          file,
        },
        {
          headers: {
            Authorization: `$Bearer ${user?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        toast.success("Pedido Realizado com sucesso");
        navigate(`/${user?.role}/my_prints`);
      })
      .catch((error) => {
        toast.error("Erro na requisição");
      });
  }

  function onSubitFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];

      if (file) {
        setFile(file);
        setFileName(file.name);
      } else {
        toast.warning("Erro no envio do arquivo. Por favor enviar arquivo '.stl'");
        return null;
      }
    }
  }

  function handleRemoveFile(e: React.MouseEvent) {
    e.preventDefault();
    setFile(null);
    setFileName("");
  }

  return (
    <Container>
      <Content>
        <Title>Adicionar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão" onChange={(e) => setTitle(e.target.value)} />

          <TitleInput>Descrição</TitleInput>
          <TextArea
            placeholder="Informe alguma informação sobre o que você deseja imprimir"
            onChange={(e) => setDescription(e.target.value)}
          />

          <TitleInput>Arquivo para impressão</TitleInput>
          <ButtonFile>
            <FileUploader onFileChange={onSubitFile} handleRemoveFile={handleRemoveFile} nameFile={fileName} />
          </ButtonFile>

          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            options={options}
            onValueChange={setMaterial}
            value={material}
          />

          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate("/admin/list_prints")}
            />
            <Button title="SALVAR" variant="fill" size="small" onClick={handleRequestPrint} />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}
