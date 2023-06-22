import { useEffect, useState } from "react";
import { Input } from "../../../components/Input";
import { Table } from "../../../components/Table";
import { useAuth } from "../../../hooks/auth";
import { Container, Content, Header, InputContainer, Title } from "./styles";
import { Pagination } from "../../../components/Pagination";

const header = ["Nome", "Email", "Cargo", "Detalhes"];

export function ListUsers() {
  const { totalPages, getUsersData, usersData } = useAuth();

  const [currentPage, setCurrentPage] = useState<number>(1);

  async function handlePreviousPage() {
    await getUsersData(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    })
  }

  async function handleNextPage() {
    await getUsersData(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }

  useEffect(() => {
    getUsersData(1);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Lista de Usuários</Title>
        <InputContainer>
          <Input
            placeholder="Buscar Usuário"
            variant="search"
          />
        </InputContainer>
      </Header>
      <Content>
        <Table
          header={header}
          data={usersData}
          variant="users"
        />
        <Pagination
          currentPage={currentPage}
          finalPage={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </Content>
    </Container>
  );
}