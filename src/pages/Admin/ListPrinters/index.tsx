import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { PrintersTableDataProps } from "../../../components/Table/PrintersTable";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";

const header = ["Nome", "Tipo", "Material", "Status", "Detalhes"];

export function ListPrinters() {
  const { user, getPrinters, printers } = useAuth();
  const navigate = useNavigate();

  const [printersData, setPrintersData] = useState<PrintersTableDataProps[]>([]);

  useEffect(() => {
    getPrinters();
  }, []);

  return (
    <Container>
      <Title>Lista de Impressoras</Title>
      <Row>
        <Input
          variant="search"
          placeholder="Buscar impressora"
          style={{ maxWidth: "20%" }}
        />
        <Button
          size="medium"
          title="Adicionar impressora"
          variant="outline"
          onClick={() => navigate("/admin/list_printers/register_printer")}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={printers} header={header} variant="printers" />
    </Container>
  );
}
