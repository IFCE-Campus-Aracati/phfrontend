import { Plus } from "@phosphor-icons/react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Container, Row, Title } from "./styles";
import { Table } from "../../../components/Table";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { Pagination } from "../../../components/Pagination";
import { Loading } from "../../../components/Loading";
import { EmpytTable } from "../../../components/EmpytTable";

const header = ["Título", "Data", "Status", "Detalhes"];

export function MyPrints() {
  const { user, getMyPrints, totalPages, myPrintData, loadingRequest } = useAuth();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);

  async function handlePreviousPage() {
    await getMyPrints(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    });
  }

  async function handleNextPage() {
    await getMyPrints(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }

  useEffect(() => {
    getMyPrints(1);
  }, []);

  if (loadingRequest) {
    return <Loading />;
  }

  return (
    <Container>
      <Title>Minhas Impressões</Title>
      <Row>
        <Input variant="search" placeholder="Buscar pedido de impressão" />
        <Button
          size="medium"
          title="Adicionar impressão"
          variant="outline"
          onClick={() => navigate(`/${user?.role}/my_prints/create_print`)}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      {myPrintData.length >= 1 ? (
        <>
          <Table data={myPrintData} header={header} variant="client" />
          <Pagination
            currentPage={currentPage}
            finalPage={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <EmpytTable text="Nenhum registro encontrado" />
      )}
    </Container>
  );
}
