import { useEffect, useState } from "react";
import { Input } from "../../../components/Input";
import { Table } from "../../../components/Table";
import { useAuth } from "../../../hooks/auth";
import { Container, Content, Header, InputContainer, Title } from "./styles";
import { Pagination } from "../../../components/Pagination";
import { EmpytTable } from "../../../components/EmpytTable";
import { Loading } from "../../../components/Loading";

const header = ["Nome", "Email", "Cargo", "Detalhes"];

export function ListUsers() {
  const { totalPages, getUsersData, usersData, loadingRequest } = useAuth();

  const [currentPage, setCurrentPage] = useState<number>(1);

  async function handlePreviousPage() {
    await getUsersData(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    });
  }

  async function handleNextPage() {
    await getUsersData(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }

  useEffect(() => {
    getUsersData(1);
  }, []);

  if (loadingRequest) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <Title>Lista de Usuários</Title>
        <InputContainer>
          <Input placeholder="Buscar Usuário" variant="search" />
        </InputContainer>
      </Header>
      {usersData.length >= 1 ? (
        <Content>
          <Table header={header} data={usersData} variant="users" />
          <Pagination
            currentPage={currentPage}
            finalPage={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </Content>
      ) : (
        <EmpytTable text="Nenhum usuário cadastrado" />
      )}
    </Container>
  );
}
