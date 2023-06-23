import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { ListTableDataProps } from "../../../components/Table/ListTable";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";
import { Pagination } from "../../../components/Pagination";

const header = ["Título", "Emissor", "Data", "Status", "Detalhes"];

export function ListPrints() {
  const { getPrints, printsData, totalPages } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);


  async function handlePreviousPage() {
    await getPrints(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    })
  }

  async function handleNextPage() {
    await getPrints(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }

  useEffect(() => {
    getPrints(1);
  }, []);

  return (
    <Container>
      <Title>Lista de Impressões</Title>
      <Row>
        <Input
          variant="search"
          placeholder="Buscar pedido de impressão"
          style={{ maxWidth: "20%" }}
        />
        <Button
          size="medium"
          title="Adicionar impressão"
          variant="outline"
          onClick={() => navigate("/admin/list_prints/register_print")}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table
        data={printsData}
        header={header}
        variant="list"
      />
      <Pagination
        currentPage={currentPage}
        finalPage={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </Container>
  );
}
