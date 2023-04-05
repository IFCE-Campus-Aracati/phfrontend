import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { PrintersTableDataProps } from "../../../components/Table/PrintersTable";

const list: PrintersTableDataProps[] = [
  {
    id: "1",
    name: "Impressora 1",
    type: "Impressora 3D",
    material: "ABS",
    status: "available",
  },
  {
    id: "2",
    name: "Impressora 2",
    type: "Impressora 3D",
    material: "PLA",
    status: "available",
  },
  {
    id: "3",
    name: "Impressora 3",
    type: "Corte",
    material: "Madeira",
    status: "available",
  },
];

const header = ["Nome", "Tipo", "Material", "Status", "Detalhes"];

export function ListPrinters() {
  return (
    <Container>
      <Title>Lista de Impressoras</Title>
      <Row>
        <Input
          variant="search"
          placeholder="Buscar impressora"
          style={{ maxWidth: "20%" }}
        />
        <Button size="medium" title="Adicionar impressora" variant="outline">
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={list} header={header} variant="printers" />
    </Container>
  );
}
