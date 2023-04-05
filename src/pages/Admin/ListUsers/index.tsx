import { Input } from "../../../components/Input";
import { Table } from "../../../components/Table";
import { UserTableDataProps } from "../../../components/Table/UserTable";
import { Container, Content, Header, InputContainer, Title } from "./styles";

const header = ["Id", "Nome", "Email", "Cargo", "Detalhes"];

const data: UserTableDataProps[] = [
  {
    id: 'string',
    name: 'string',
    email: 'string',
    role: 'string',
  },
  {
    id: 'string',
    name: 'string',
    email: 'string',
    role: 'string',
  },
  {
    id: 'string',
    name: 'string',
    email: 'string',
    role: 'string',
  },
  {
    id: 'string',
    name: 'string',
    email: 'string',
    role: 'string',
  },
  {
    id: 'string',
    name: 'string',
    email: 'string',
    role: 'string',
  }
]

export function ListUsers(){
  return(
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
          data={data}
          variant="users"
        />
      </Content>
    </Container>
  );
}