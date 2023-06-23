import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { FileUploader } from "../../../../components/FileUploader"
import { RadioGroup } from "../../../../components/RadioGroup";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Prints, useAuth } from "../../../../hooks/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { date } from "yup";
import { id } from "date-fns/locale";

const statusOptions = [
  { text: 'Pendente', value: 'pending' },
  { text: 'Aprovado', value: 'approved' },
  { text: 'Recusado', value: 'decline' },
  { text: 'Concluído', value: 'done' }
]


export function EditListPrint() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { printers, editPrints, getPrintDetail, print } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [printData, setPrintData] = useState<Prints>({} as Prints);

  const printersOptions = printers.map((printer) => ({
    text: printer.title,
    value: printer.id as string,
  }));

  // TODO: FAZER VALIDAÇÃO DO EDIT!
  // TODO: AJEITAR A FUNÇÃO DO AUTH E USAR ELA!

  const [status, setStatus] = useState('');
  const [duration, setDuration] = useState('');
  const [printerId, setPrinterId] = useState('');

  async function printDetail(id: string) {
    try {
      setIsLoading(true);
      await getPrintDetail(id as string);



      setIsLoading(false);
    } catch (error) {
      toast.error('Não foi possível localizar a impressão');
    } finally {
      setIsLoading(false);
    }
  }


  async function handleEditPrint(event: any) {
    try {
      event.preventDefault();

      const id = print?.id;
      console.log(id)

      await editPrints({ status, id: id as string, printing_duration: duration, printer_id: printerId })
      navigate("/admin/list_prints")
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível editar')
    }
  }
  useEffect(() => {
    printDetail(id as string);

  }, []);

  return (
    <Container>
      <Content>
        <Title>Editar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput
            placeholder={print?.title as string}
            readOnly
          />
          <TitleInput>Descrição</TitleInput>
          <TextArea
            placeholder={print?.description as string}
            readOnly
          />
          <TitleInput>Arquivo para impressão</TitleInput>
          <FileUploader
            onFileChange={() => { }}
            handleRemoveFile={() => { }}
            nameFile={print?.archive as string}
          />
          <TitleInput>Dados da Impressão</TitleInput>

          <Attachments>
            <TextAttachments>Duração:</TextAttachments>
            <InputText
              defaultValue={"40"}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="text" />
          </Attachments>
          <TitleInput>Status</TitleInput>
          <StatusContainer>
            <RadioGroup
              options={statusOptions}
              value={status}
              onValueChange={setStatus}
            />
          </StatusContainer>
          <TitleInput>Impressora</TitleInput>
          <StatusContainer>
            <RadioGroup
              options={printersOptions}
              value={printerId}
              onValueChange={setPrinterId}
            />
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
              onClick={handleEditPrint}
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}