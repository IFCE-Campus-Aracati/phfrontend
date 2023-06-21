import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { RadioGroup } from "../../../../components/RadioGroup";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";

import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import  api  from '../../../../server/api'
import { useState, useEffect } from 'react';
import { PrintersTableDataProps } from "../../../../components/Table/PrintersTable";
import { useAuth } from '../../../../hooks/auth'

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

export function EditPrinter() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [material, setMaterial] = useState('');
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState('');

  const [printerData, setPrinterData] = useState<PrintersTableDataProps>();

  useEffect(() => {
    async function getPrinter() {
      try {
        const response = await api.get<PrintersTableDataProps>("/detailsPrinter", {
          headers: { Authorization: `$Bearer ${user?.token}` }
        });

        setPrinterData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getPrinter();
  }, []);

  console.log(printerData)

  return (
    <Container>
      <Content>
        <Title>Editar Impressora</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput 
            placeholder="Nome da Impressora"
            value={printerData?.title}
            onChange={setTitle} 
          />

          <TitleInput>Descrição</TitleInput>
          <TextArea 
            placeholder="Adicione alguma informação sobre a impressora que deseja cadastrar" 
            value={printerData?.description}
            onChange={setDescription}
            />

          <TitleInput>Tipo da Impressora</TitleInput>
          <SelectInput
            placeholder="Selecione o Tipo"
            open={true}
            options={typeOptions}
            value={printerData?.type}
            onValueChange={setType}
          />
          <TitleInput>Material Trabalhado</TitleInput>
          <SelectInput
            placeholder="Selecione o Material"
            open={true}
            options={materialOptions}
            value={printerData?.material}
            onValueChange={setMaterial}
          />
          <TitleInput>Status</TitleInput>
          <StatusContainer>
            <RadioGroup
              options={statusOptions}
              value={printerData?.status}
              onValueChange={setStatus}
            />
            <PrintFormInput 
              placeholder="Motivo da Indisponibilidade" 
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
              onClick={() => navigate("/admin/list_printers")}
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}