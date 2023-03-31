import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { ListTableDataProps } from "../../../components/Table/ListTable";

const list: ListTableDataProps[] = [
  {
    id: "1",
    title: "Peça de xadrez",
    owner: "Gabriel C Moura",
    date: "30/03/2023",
    status: "pending",
  },
];

const header = ["Título", "Emissor", "Data", "Status", "Detalhes"];

export function ListPrints() {
  return (
    <Container>
      <Title>Lista de Impressões</Title>
      <Row>
        <Input
          variant="search"
          placeholder="Buscar pedido de impressão"
          style={{ maxWidth: "20%" }}
        />
        <Button size="large" title="Adicionar impressão" variant="outline">
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={list} header={header} variant="list" />
    </Container>
  );
}
