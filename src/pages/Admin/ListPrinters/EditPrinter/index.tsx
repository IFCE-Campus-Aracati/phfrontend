import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { RadioGroup } from "../../../../components/RadioGroup";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";

import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import api from '../../../../server/api'
import { useState, useEffect, ChangeEvent } from 'react';
import { Printers, useAuth } from '../../../../hooks/auth'
import { toast } from "react-toastify";
import { object, string } from "yup";

const statusOptions = [
  { value: "available", text: "Disponível" },
  { value: "unavailable", text: "Indisponível" },
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

export function EditPrinter() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user, editPrinter } = useAuth();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [material, setMaterial] = useState('');
  const [status, setStatus] = useState<any>('');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [printerData, setPrinterData] = useState<Printers>();

  useEffect(() => {
    async function getPrinter() {
      try {
        setIsLoading(true);
        const response = await api.get(`/detailsPrinter/${id}`, {
          headers: { Authorization: `$Bearer ${user?.token}` },
        });

        setPrinterData(response.data);
        setTitle(response.data.title)
        setMaterial(response.data.material)
        setType(response.data.type)
        setStatus(response.data.status)

        setIsLoading(false)

      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getPrinter();
  }, []);

  async function handleEditPrinter(event: any) {
    try {
      event.preventDefault();

      const schema = object().shape({
        title: string(),
        description: string(),
        type: string(),
        material: string(),
        status: string()
      })

      await schema.validate({ title, description, type, material, status });
      const id = printerData?.id;
      console.log(title, description, type, material, status, id)



      await editPrinter({ title, description, status, type, material, id });
      navigate("/admin/list_printers")
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível editar.')
    }
  }

  if (isLoading) {
    return (
      <div>carregando</div>
    )
  }

  return (
    <Container>
      <Content>
        <Title>Editar Impressora</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput
            placeholder="Nome da Impressora"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />

          <TitleInput>Descrição</TitleInput>
          <TextArea
            value={printerData?.description}
            placeholder="Adicione alguma informação sobre a impressora que deseja cadastrar"
            onChange={(e) => setDescription(e.target.value)}
          />

          <TitleInput>Tipo da Impressora</TitleInput>
          <SelectInput
            placeholder="Selecione o Tipo"
            open={true}
            options={typeOptions}
            value={type}
            onValueChange={setType}
          />
          <TitleInput>Material Trabalhado</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            open={true}
            options={materialOptions}
            value={material}
            onValueChange={setMaterial}
          />
          <TitleInput>Status</TitleInput>
          <StatusContainer>
            <RadioGroup
              options={statusOptions}
              value={printerData?.status}
              onValueChange={setStatus}
            />
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
              onClick={handleEditPrinter}
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}