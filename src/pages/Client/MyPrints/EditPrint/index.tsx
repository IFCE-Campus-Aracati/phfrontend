import { Button } from "../../../../components/Button";
import { InputFile } from "../../../../components/InputFile";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import { FileUploader } from "../../../../components/FileUploader"
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { SideBar } from "../../../../components/SideBar";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../../server/api";
import { useAuth } from "../../../../hooks/auth";
import { DateProps } from "../../../../components/Modal/detailsAnonymous/detailsAnonymous";

const options = [
  { value: "ABS", text: "ABS" },
  { value: "PLA", text: "PLA" },
  { value: "PETG", text: "PETG" },
];

export function EditPrint() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, getPrintDetail, print } = useAuth();

  const [myPrintData, setMyPrintData] = useState<DateProps>({} as DateProps);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMyPrint(){
      try{
        setIsLoading(true);

        const response = await api.get<DateProps>(`/searchByIdPrint/${id}`, {
          headers: { Authorization: `$Bearer ${user?.token}` },
        });

        setMyPrintData(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setMaterial(response.data.material);
        // setFile(response.data.archive);
        
      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getMyPrint();
  }, [])

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

  console.log(myPrintData);
  console.log(description);

  if(isLoading) {
    <div>Carregando</div>
  }

  return (
    <Container>
      <Content>
        <Title>Editar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput
            placeholder="Nome da Impressora"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />

          <TitleInput>Descrição</TitleInput>
          <TextArea
            value={description}
            placeholder={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <TitleInput>Arquivo para impressão</TitleInput>
          <Attachments>
            <FileUploader onFileChange={onSubitFile} handleRemoveFile={handleRemoveFile} nameFile={fileName} />

          </Attachments>
          <TitleInput>Material para Impressão</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            open={true}
            options={options}
            value={material}
            onValueChange={setMaterial}
          />
          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate(`/${user?.role}/my_prints`)}
            />
            <Button
              title="ATUALIZAR"
              variant="fill"
              size="small"
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}