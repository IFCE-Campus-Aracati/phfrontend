import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { FileUploader } from "../../../../components/FileUploader"
import { RadioGroup } from "../../../../components/RadioGroup";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Prints, useAuth } from "../../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../../server/api";
import { format } from "date-fns";
import { EditPrint } from "../../../Client/MyPrints/EditPrint";

const statusOptions = [
  { text: 'Pendente', value: 'pending' },
  { text: 'Aprovado', value: 'approved' },
  { text: 'Recusado', value: 'decline' },
  { text: 'Concluído', value: 'done' }
]

export function EditListPrint() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, getPrints, totalPages, printers, editPrints } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [printData, setPrintData] = useState<Prints>({} as Prints);

  const printersOptions = printers.map((printer) => ({
    text: printer.title,
    value: printer.id as string,
  }));

  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [printerId, setPrinterId] = useState('');

  async function getPrintDetail() {
    try {
      setIsLoading(true);

      await api.get(`/searchByIdPrint/${id}`, {
        headers: { Authorization: `Bearer ${user?.token}` }
      }).then((response) => {
        setPrintData(response.data);
        setStatus(response.data.status)

        setDuration(response.data.printing_duration)
      })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEditPrint(event: any) {
    try {
      event.preventDefault();

      const id = printData?.id;

      await editPrints({ status, id: id as string, printing_duration: duration, date, printer_id: printerId })
      navigate("/admin/list_prints")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPrintDetail();

  }, []);

  return (
    <Container>
      <Content>
        <Title>Editar Impressão</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput
            placeholder={printData?.title as string}
            readOnly
          />

          <TitleInput>Descrição</TitleInput>
          <TextArea
            placeholder={printData?.description as string}

            readOnly
          />

          <TitleInput>Arquivo para impressão</TitleInput>
          <FileUploader
          />
          <TitleInput>Dados da Impressão</TitleInput>

          <Attachments>
            <TextAttachments>Data para início:</TextAttachments>
            <InputDate
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
            <PrintFormInput placeholder="Motivo da Recusa" />
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