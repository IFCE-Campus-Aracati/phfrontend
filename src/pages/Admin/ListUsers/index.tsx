import { useEffect, useState } from "react";
import { Input } from "../../../components/Input";
import { Table } from "../../../components/Table";
import { UserTableDataProps } from "../../../components/Table/UserTable";
import { useAuth } from "../../../hooks/auth";
// import { getUsers, useUsers } from "../../../hooks/fetchData/useUsers";
import api from "../../../server/api";
import { Container, Content, Header, InputContainer, Title } from "./styles";

const header = ["Nome", "Email", "Cargo", "Detalhes"];

export function ListUsers() {
  const { getUsersData, usersData } = useAuth();

  useEffect(() => {
    getUsersData();

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
      </Content>
    </Container>
  );
}