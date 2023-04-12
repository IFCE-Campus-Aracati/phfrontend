import { ArrowLeft } from "@phosphor-icons/react";
import { ButtonBack, InputTitle, Container, Content, Header, Title, TitleContainer, InputWrapper, InputContainer } from "./styles";
import { Table } from "../../../components/Table";
import { SearchTableDataProps } from "../../../components/Table/SearchTable";
import { Input } from "../../../components/Input";
import { useNavigate } from "react-router-dom";

const header = ["Id", "Título", "Data", "Status", "Detalhes"];

const data: SearchTableDataProps[] = [
  {
    id: "1",
    idSearch: "3D123456A",
    title: "Peça de xadrez",
    date: "02/04/2023",
    status: "approved"
  }
]

export function SearchPrint() {
  const navigate = useNavigate();
  
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
            />
          </InputContainer>
         
          </InputWrapper>
      </Header>
      <Content>
        <Table variant="search" data={data} header={header}/>
      </Content>
    </Container>
  );
}