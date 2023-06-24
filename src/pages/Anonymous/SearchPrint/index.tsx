import { ArrowLeft } from "@phosphor-icons/react";
import {
  ButtonBack,
  InputTitle,
  Container,
  Content,
  Header,
  Title,
  TitleContainer,
  InputWrapper,
  InputContainer,
} from "./styles";
import { Table } from "../../../components/Table";
import { Input } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../../server/api";
import { toast } from "react-toastify";

const header = ["Id", "Título", "Data", "Status", "Detalhes"];

import { PrintProps } from "../../../utils/interfaces";

export function SearchPrint() {
  const navigate = useNavigate();

  const [data, setDate] = useState<PrintProps>({} as PrintProps);
  const [modalView, setModalView] = useState<boolean>(false);

  const [identifier, setIdentifier] = useState<string>("");

  async function handleSearchbyId() {
    await api
      .get(`/searchByIdPrint/${identifier}`)
      .then((response) => {
        setDate(response.data);
        setModalView(true);
      })
      .catch((error) => {
        toast.error("Nenhuma pedido de impressão encontrado");
      });
  }

  return (
    <Container>
      <Header>
        <TitleContainer>
          <ButtonBack onClick={() => navigate("/")}>
            <ArrowLeft size={20} weight="bold" />
          </ButtonBack>
          <Title>Buscar Impressões</Title>
        </TitleContainer>

        <InputWrapper>
          <InputTitle>Informe o identificador de busca</InputTitle>
          <InputContainer>
            <Input
              placeholder="Buscar pedido de impressão"
              variant="search"
              onClick={handleSearchbyId}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </InputContainer>
        </InputWrapper>
      </Header>
      <Content>
        <Table variant="search" data={data} header={header} />
      </Content>
    </Container>
  );
}
