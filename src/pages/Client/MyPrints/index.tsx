import { Plus } from "@phosphor-icons/react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Container, Row, Title } from "./styles";
import { Table } from "../../../components/Table";
import { ClientListTableDataProps } from "../../../components/Table/ClientListTable";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";
import { Pagination } from "../../../components/Pagination";

const header = ["Título", "Data", "Status", "Detalhes"];

export function MyPrints() {
  const { user, getMyPrints, totalPages, myPrintData } = useAuth();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);


  async function handlePreviousPage() {
    await getMyPrints(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    })
  }

  async function handleNextPage() {
    await getMyPrints(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }


  useEffect(() => {

    getMyPrints(1);

  }, []);

  return (
    <Container>
      <Title>Minhas Impressões</Title>
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
          onClick={() => navigate(`/${user?.role}/my_prints/create_print`)}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={myPrintData} header={header} variant="client" />
      
      <Pagination
        currentPage={currentPage}
        finalPage={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />

    </Container>
  );
}