import { Plus } from "@phosphor-icons/react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Container, Row, Title } from "./styles";
import { Table } from "../../../components/Table";
import { ClientListTableDataProps } from "../../../components/Table/ClientListTable";
import { useNavigate } from "react-router";

const list: ClientListTableDataProps[] = [
  {
    id: "1",
    title: "Peça de xadrez",
    date: "30/03/2023",
    status: "pending",
  },
];

const header = ["Título", "Data", "Status", "Detalhes"];

export function MyPrints() {
  const navigate = useNavigate();
  return(
    <Container>
      <Title>Minhas Impressões</Title>
      <Row>
        <Input
          variant="search"
          placeholder="Buscar pedido de impressão"
          style={{ maxWidth: "20%" }}
        />
        <Button size="medium" title="Adicionar impressão" variant="outline" onClick={() => navigate("/client/create_print")} >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={list} header={header} variant="client" />
    </Container>
  );
}