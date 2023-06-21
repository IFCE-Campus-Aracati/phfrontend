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
  const { user } = useAuth();
  const [usersData, setUsersData] = useState<UserTableDataProps[]>([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get<UserTableDataProps[]>("/users", {
          headers: { Authorization: `$Bearer ${user?.token}` }
        });

        setUsersData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getUsers();

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