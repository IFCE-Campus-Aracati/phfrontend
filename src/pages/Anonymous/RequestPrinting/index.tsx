import { ArrowLeft } from "@phosphor-icons/react";
import { Button } from "../../../components/Button";
import { FileUploader } from "../../../components/FileUploader";
import { PrintFormInput } from "../../../components/PrintFormInput";
import { SelectInput } from "../../../components/Select";
import { TextArea } from "../../../components/TextArea";
import { ButtonBack, Container, Content, Footer, FormContainer, Header, Title, TitleInput } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../../server/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { Modal } from "../../../components/Modal";
import { PrintProps } from "../../../utils/interfaces";

export function RequestPrinting() {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [material, setMaterial] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [data, setDate] = useState<PrintProps>({} as PrintProps);

  const [modalView, setModalView] = useState<boolean>(false);

  const options = [
    { value: "ABS", text: "ABS" },
    { value: "PETG", text: "PETG" },
    { value: "PLA", text: "PLA" },
  ];

  async function handleRequestPrint() {
    await api
      .post(
        "/createPrintAnonimous",
        {
          title,
          description,
          material,
          file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setDate(response.data);
        setModalView(true);
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
        <Header>
          <ButtonBack onClick={() => navigate("/")}>
            <ArrowLeft size={20} weight="bold" />
          </ButtonBack>
          <Title>Solicitar Impressão</Title>
        </Header>

        <FormContainer>
          <TitleInput>Título</TitleInput>
          <PrintFormInput placeholder="Título da sua impressão" onChange={(e) => setTitle(e.target.value)} />

          <TitleInput>Descrição</TitleInput>
          <TextArea
            placeholder="Informe alguma informação sobre o que você deseja imprimir"
            onChange={(e) => setDescription(e.target.value)}
          />

          <TitleInput>Arquivo para impressão</TitleInput>
          <FileUploader onFileChange={onSubitFile} handleRemoveFile={handleRemoveFile} nameFile={fileName} />

          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            options={options}
            onValueChange={setMaterial}
            value={material}
          />
        </FormContainer>
      </Content>
      <Footer>
        <Button title="Cancelar" variant="outline" size="small" onClick={() => navigate("/")} />

        <Button title="ENVIAR" variant="fill" size="small" onClick={handleRequestPrint} />

        <Modal
          title="Pedido de impressão"
          data={data}
          value={modalView}
          setValue={setModalView}
          variant="detailsAnonymous"
          route="/"
        />
      </Footer>
    </Container>
  );
}
