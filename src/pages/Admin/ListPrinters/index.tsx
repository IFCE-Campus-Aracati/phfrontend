import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { Pagination } from "../../../components/Pagination";

const header = ["Nome", "Tipo", "Material", "Status", "Detalhes"];

export function ListPrinters() {
  const { totalPages, getPrinters, printers } = useAuth();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);

  async function handlePreviousPage() {
    await getPrinters(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    })
  }

  async function handleNextPage() {
    await getPrinters(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }

  useEffect(() => {
    getPrinters(1);
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
      <Pagination
        currentPage={currentPage}
        finalPage={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </Container>
  );
}
