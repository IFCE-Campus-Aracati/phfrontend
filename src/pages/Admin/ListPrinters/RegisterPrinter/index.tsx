import { useState } from "react";
import { Button } from "../../../../components/Button";
import { PrintFormInput } from "../../../../components/PrintFormInput";
import { RadioGroup } from "../../../../components/RadioGroup";
import { SelectInput } from "../../../../components/Select";
import { TextArea } from "../../../../components/TextArea";
import { Container, Content, Footer, FormContainer, Title, TitleInput, Attachments, TextAttachments, InputDate, InputText, StatusContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { useAuth } from "../../../../hooks/auth";


const materialOptions = [
  { value: "ABS", text: "ABS" },
  { value: "PLA", text: "PLA" },
  { value: "PETG", text: "PETG" },
];

const typeOptions = [
  { value: "3D", text: "3D" },
  { value: "Corte", text: "Corte" },
];

const statusOptions = [
  { value: "available", text: "Disponível" },
  { value: "unavailable", text: "Indisponível" },
]

export function RegisterPrinter() {
  const navigate = useNavigate();
  const { createPrinter } = useAuth();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [material, setMaterial] = useState('');

  async function handleCreatePrinter(event: any) {
    try {
      event.preventDefault();

      const schema = object().shape({
        title: string().required('É necessário dar um nome.'),
        description: string().required('É necessário dar uma descrição a impressora'),
        type: string().required('É necessário informar o tipo da impressora.'),
        material: string().required('É necessário informar o material da impressora.'),
      })

      await schema.validate({ title, description, type, material });
      await createPrinter({ title, description, type, material });
      navigate("/admin/list_printers")

    } catch (error) {
      toast.error('Não foi possível cadastrar uma impressora');

      console.log(error)
    }
  }

  return (
    <Container>
      <Content>
        <Title>Adicionar Impressora</Title>

        <FormContainer>
          <TitleInput style={{ marginTop: "0" }}>Título</TitleInput>
          <PrintFormInput
            value={title}
            placeholder="Nome da Impressora"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TitleInput>Descrição</TitleInput>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Adicione alguma informação sobre a impressora que deseja cadastrar"
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


          <Footer>
            <Button
              title="cancelar"
              variant="outline"
              size="small"
              onClick={() => navigate("/admin/list_printers")}
            />
            <Button
              title="SALVAR"
              variant="fill"
              size="small"
              onClick={handleCreatePrinter}
            />
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  );
}