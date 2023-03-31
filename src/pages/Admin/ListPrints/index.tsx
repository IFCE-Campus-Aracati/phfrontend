import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import {
  ListTable,
  ListTableDataProps,
} from "../../../components/Table/ListTable";

import { Plus } from "@phosphor-icons/react";

import { Container, Title, Row } from "./styles";

const data: ListTableDataProps[] = [
  {
    id: "1",
    title: "Peça de xadrez",
    owner: "Gabriel C Moura",
    date: "30/03/2023",
    status: "pending",
  },
  {
    id: "2",
    title: "Peça de xadrez",
    owner: "Gabriel C Moura",
    date: "30/03/2023",
    status: "approved",
  },
  {
    id: "3",
    title: "Peça de xadrez",
    owner: "Gabriel C Moura",
    date: "30/03/2023",
    status: "decline",
  },
  {
    id: "4",
    title: "Peça de xadrez",
    owner: "Gabriel C Moura",
    date: "30/03/2023",
    status: "decline",
  },
  {
    id: "5",
    title: "Peça de xadrez",
    owner: "Gabriel C Moura",
    date: "30/03/2023",
    status: "decline",
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

      <ListTable data={data} header={header} isView isEdit />
    </Container>
  );
}
